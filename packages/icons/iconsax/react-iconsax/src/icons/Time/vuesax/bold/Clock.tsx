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
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z"
        fill="#292D32"
      />
    </svg>
  );
};
export default SvgClock;
