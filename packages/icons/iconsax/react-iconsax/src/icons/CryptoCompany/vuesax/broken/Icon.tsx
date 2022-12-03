// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgIcon = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
      <path opacity={0.58} d="M24 0H0v24h24V0Z" fill="#fff" />
      <path
        d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#fff"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <path
        d="M10 13.5c1.25.63 2.73.63 3.99.01l.01-.01"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m10 16.499 2-2.53 2 2.53"
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
export default SvgIcon;
