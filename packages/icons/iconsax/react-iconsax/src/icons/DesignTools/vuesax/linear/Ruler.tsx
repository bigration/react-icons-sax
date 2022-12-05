// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgRuler = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M5 17h14c2 0 3-1 3-3v-4c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3ZM18 7v5M6 7v4M10.05 7 10 12M14 7v3"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};
export default SvgRuler;
