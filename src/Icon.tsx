import { SVGProps, forwardRef, ElementType } from 'react';

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const createIcon = (SvgComponent: ElementType) => {
  const IconComponent = forwardRef<SVGSVGElement, BaseIconProps>(
    ({ size = "1em", color, style, ...props }, ref) => (
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