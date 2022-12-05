// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgMessageText = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6Z"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M7 9.5h10M7 14.5h7"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgMessageText;
