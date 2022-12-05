// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number,
};
const SvgAlarm = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M2 22h20M12 6a9 9 0 0 0-9 9v7h18v-7a9 9 0 0 0-9-9ZM12 2v1M4 4l1 1M20 4l-1 1"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgAlarm;
