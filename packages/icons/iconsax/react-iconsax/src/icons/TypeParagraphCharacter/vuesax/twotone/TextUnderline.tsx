// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number,
};
const SvgTextUnderline = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        d="M5 21h14"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgTextUnderline;
