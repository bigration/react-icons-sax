// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgRefreshCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        opacity={0.4}
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.008 14.512c.18.3.4.58.65.83a4.732 4.732 0 0 0 6.68 0c.75-.75 1.18-1.7 1.32-2.67M7.34 11.331c.14-.98.57-1.92 1.32-2.67a4.732 4.732 0 0 1 6.68 0c.26.26.47.54.65.83" />
        <path d="M7.82 17.182v-2.67h2.67M16.178 6.82v2.67h-2.67" />
      </g>
    </svg>
  );
};
export default SvgRefreshCircle;
