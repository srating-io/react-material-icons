#!/bin/bash

# Update the source icons to the latest version
npm install @material-design-icons/svg@latest

# Define the variants we want to process
VARIANTS=("filled" "outlined" "round" "sharp" "two-tone")

# Clear the old build to start fresh
rm -rf ./src
mkdir -p ./src

mkdir -p ./src/utils

echo "
import { SVGProps, forwardRef, ElementType } from 'react';

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const createIcon = (SvgComponent: ElementType) => {
  const IconComponent = forwardRef<SVGSVGElement, BaseIconProps>(
    ({ size = '1em', color, style, ...props }, ref) => (
      <SvgComponent
        ref={ref}
        style={{
          fontSize: size,
          color: color,
          display: 'inline-block',
          verticalAlign: 'middle',
          fill: 'currentColor',
          ...style,
        }}
        {...props}
      />
    )
  );

  return IconComponent;
};
" > ./src/utils/Icon.tsx

for STYLE in "${VARIANTS[@]}"
do
  echo "Processing $STYLE..."
  
  # Define source and destination
  SOURCE_DIR="./node_modules/@material-design-icons/svg/$STYLE"
  TEMP_SVG_DIR="./temp_svg_$STYLE"
  TEMP_DIR="./temp_$STYLE"
  
  # Create target directory
  mkdir -p $TEMP_SVG_DIR
  mkdir -p $TEMP_DIR

  case $STYLE in
    "filled")   SUFFIX="" ;;
    "outlined") SUFFIX="Outlined" ;;
    "round")    SUFFIX="Round" ;;
    "sharp")    SUFFIX="Sharp" ;;
    "two-tone") SUFFIX="TwoTone" ;;
  esac

  export ICON_SUFFIX=$SUFFIX 

  echo "Resolving SVG naming collisions dynamically..."
  TRACKER_FILE="./seen_names_$STYLE.txt"
  > "$TRACKER_FILE"

  for svg in "$SOURCE_DIR"/*.svg; do
    [ -e "$svg" ] || continue
    base=$(basename "$svg" .svg)

    # Normalize name: remove hyphens/underscores and convert to lowercase
    normalized=$(echo "$base" | sed 's/[-_]//g' | tr '[:upper:]' '[:lower:]')

    # If this normalized name has already been seen, dynamically append -alt
    if grep -q "^${normalized}$" "$TRACKER_FILE"; then
      base="${base}-alt"
    else
      echo "$normalized" >> "$TRACKER_FILE"
    fi

    # Copy to the temporary SVG folder with the safe name
    cp "$svg" "$TEMP_SVG_DIR/${base}.svg"
  done
  
  # Clean up the tracker file
  rm "$TRACKER_FILE"

  # Run SVGR
  # --out-dir: puts the TSX files in the style folder
  npx @svgr/cli --config-file svgr.config.cjs \
    --out-dir $TEMP_DIR \
    $TEMP_SVG_DIR
  

  # Count total files first for better logging
  total_files=$(ls -1 "$TEMP_DIR"/*.tsx 2>/dev/null | wc -l)
  count=0

  # could try doing a mass rename, but I dont want to match previously ran variants

  echo "Starting rename: $total_files files to process."

  SECONDS=0

  # Move and rename files: IconName.tsx -> IconNameSuffix.tsx
  for file in "$TEMP_DIR"/*.tsx; do
    # Guard clause in case no files match the pattern
    [ -e "$file" ] || continue

    count=$((count + 1))

    # 1. Get the base filename (e.g., "account-circle")
    filename=$(basename "$file")
    base="${filename%.*}"

    # 2. Convert base name to PascalCase (e.g., "account-circle" -> "AccountCircle")
    # This replaces hyphens with the uppercase version of the following letter
    PASCAL_BASE=$(echo "$base" | perl -F'/-|_/' -ane 'print map {ucfirst} @F')

    # 3. Define destination
    # $SUFFIX is already PascalCase (e.g., "Round") or empty
    DEST="./src/${PASCAL_BASE}${SUFFIX}.tsx"

    # \033[K clears the line from the cursor to the right
    echo -ne "Progress: [$count/$total_files] Moving $base -> $(basename "$DEST")\033[K\r"

    # 3. Move and rename: ./src/AccountCircleRound.tsx
    mv "$file" "$DEST"
  done

  duration=$SECONDS
  echo -e "\nFinished! Processed $count files in $duration seconds."

  # Clean up temp
  rm -rf "$TEMP_DIR"

  echo "Finished $STYLE"
done

# Clear the main index
echo "" > ./src/index.ts

# 1. Export the base Icon logic first
# Note: Using .js extension for ESM compatibility with nodenext
# echo "export * from './Icon.tsx';" >> ./src/index.ts

# 2. Add exports for every generated component
echo "Appending all component exports to index.ts..."

# Logic:
# - find all .tsx files in ./src (excluding index.ts)
# - sed: remove the './src/' prefix and '.tsx' suffix
# - awk: format into an export statement with js
find ./src -name "*.tsx" ! -name "index.ts" | \
  sed 's|./src/||; s|.tsx$||' | \
  awk '{ print "export * from \"./" $0 ".js\";" }' >> ./src/index.ts

echo "Finished processing $(wc -l < ./src/index.ts) exports!"