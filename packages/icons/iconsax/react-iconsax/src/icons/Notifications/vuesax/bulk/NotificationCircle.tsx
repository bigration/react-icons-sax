// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgNotificationCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
      <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#292D32" />
      <path
        opacity={0.4}
        d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.91.27-1.75.74-2.45A9.971 9.971 0 0 0 12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10c0-1.13-.2-2.22-.55-3.24-.7.47-1.54.74-2.45.74Z"
        fill="#292D32"
      />
    </svg>
  );
};
export default SvgNotificationCircle;
