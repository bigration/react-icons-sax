// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgArrow = (props: IconProps & SVGProps<SVGSVGElement>) => {
  const mergedStyles = {
    display: 'inline-block',
    fill: undefined,
    height: props.size || 24,
    width: props.size || 24,
  };
  return (
    <svg
      width="1em"
      height="1em"
      viewBox={props.viewBox || '0 0 24 24'}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color={props.color || undefined}
      style={mergedStyles}
      {...props}
    >
      <path
        d="M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.45 5.602a6.973 6.973 0 0 1 2.55 5.4v3M2 4h3M4 2 2 4l2 2M20 2l2 2-2 2"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgArrow;
