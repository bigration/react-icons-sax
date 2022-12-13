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
        opacity={0.4}
        clipRule="evenodd"
        d="M6 9.682v2.8c0 1.54 1.25 2.78 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H6.93a.92.92 0 0 0-.93.92Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <path
        opacity={0.4}
        clipRule="evenodd"
        d="M18 9.238v5.54l-2.77-1.85v-1.84L18 9.238Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </svg>
  );
};
export default SvgZoom;
