// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgWindows = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M22 6.03V2L12 4v7h10"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgWindows;
