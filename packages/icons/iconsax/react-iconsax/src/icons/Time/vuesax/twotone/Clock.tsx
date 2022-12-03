// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgClock = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgClock;
