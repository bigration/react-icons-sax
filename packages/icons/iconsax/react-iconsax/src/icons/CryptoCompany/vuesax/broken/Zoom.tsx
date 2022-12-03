// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgZoom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        clipRule="evenodd"
        d="M6 9.682v2.8c0 1.54 1.25 2.78 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H6.93a.92.92 0 0 0-.93.92Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <path
        clipRule="evenodd"
        d="M18 9.238v5.54l-2.77-1.85v-1.84L18 9.238Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        stroke="#17191C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgZoom;
