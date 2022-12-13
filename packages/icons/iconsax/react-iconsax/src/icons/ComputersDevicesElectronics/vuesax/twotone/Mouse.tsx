// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgMouse = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={props.color || undefined}
      style={mergedStyles}
      {...props}
    >
      <path
        d="M12 22c4.13 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5v5c0 4.13 3.37 7.5 7.5 7.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        opacity={0.4}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5ZM12 6V2" />
      </g>
    </svg>
  );
};
export default SvgMouse;
