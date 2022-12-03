// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgDropbox = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M12 5 7.56 2 2 6l4.44 3L12 5ZM12 5l4.44-3L22 6l-4.44 3L12 5ZM12 14l-4.44 3L2 13l4.44-3L12 14ZM12 14l4.44 3L22 13l-4.44-3L12 14Z"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.4}
        d="M19 15.5v3.27l-6.58 3.04c-.27.12-.57.12-.84 0L5 18.77V15.5"
        stroke={props.color || `#000000`}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SvgDropbox;
