// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgMirror = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        opacity={0.4}
        d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        fill="#292D32"
      />
      <path
        d="M18 22.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
export default SvgMirror;
