#!/bin/bash

# Update the source icons to the latest version
npm install @material-design-icons/svg@latest

# Define the variants we want to process
VARIANTS=("filled" "outlined" "round" "sharp" "two-tone")

# Clear the old build to start fresh
rm -rf ./src/components
mkdir -p ./src/components

for STYLE in "${VARIANTS[@]}"
do
  echo "Processing $STYLE..."
  
  # Define source and destination
  SOURCE_DIR="./node_modules/@material-design-icons/svg/$STYLE"
  TARGET_DIR="./src/components/$STYLE"
  
  # Create target directory
  mkdir -p $TARGET_DIR

  # Run SVGR
  # --out-dir: puts the TSX files in the style folder
  # --index-template: creates a barrel export for that specific style
  npx @svgr/cli --config-file svgr.config.js \
      --index-template index-template.js \
      --out-dir $TARGET_DIR \
      $SOURCE_DIR

  echo "Finished $STYLE"
done

# Clear the main index
echo "" > ./src/index.ts

# Export the Icon logic
echo "export * from './Icon';" >> ./src/index.ts

# Add exports for every variant
for STYLE in "${VARIANTS[@]}"
do
  # Convert "two-tone" → "TwoTone"
  PASCAL=$(echo "$STYLE" | sed 's/-\([a-z]\)/\U\1/g; s/^\([a-z]\)/\U\1/g')

  echo "export * as ${PASCAL} from './components/$STYLE/index';" >> ./src/index.ts
done

echo "Finished processing all icons!"