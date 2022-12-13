// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgFrame = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
      <path d="M24 0H0v24h24V0Z" fill="#fff" />
      <path d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9l-5-3Z" fill="currentColor" />
      <path
        opacity={0.4}
        d="m12 18-5 3-5-3V6l5-3 10 6v6L7 9v6l5 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgFrame;
