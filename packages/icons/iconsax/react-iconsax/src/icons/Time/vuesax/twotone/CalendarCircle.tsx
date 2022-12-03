// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgCalendarCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
  const mergedStyles = {
    display: 'inline-block',
    fill: undefined,
    height: props.size || 24,
    width: props.size || 24,
  };
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox={props.viewBox || '0 0 24 24'}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={mergedStyles}
      {...props}
    >
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        opacity={0.4}
        stroke="#292D32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.89 5.828v2M14.11 5.828v2M7.53 10.137h8.94M13.5 17.668h-3c-2.5 0-4-1.8-4-4v-3c0-2.2 1.5-4 4-4h3c2.5 0 4 1.8 4 4v3c0 2.2-1.5 4-4 4Z" />
      </g>
    </svg>
  );
};
export default SvgCalendarCircle;
