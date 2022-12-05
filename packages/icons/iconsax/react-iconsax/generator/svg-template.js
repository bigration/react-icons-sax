const comments = `
// Auto-generated file
`;

const template = (variables, { tpl }) => {
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};

type IconProps = {size?: number};

const ${variables.componentName} = (props: IconProps & SVGProps<SVGSVGElement>) => {
const mergedStyles = {
      display: 'inline-block',
      fill: undefined,
      height: props.size || 24,
      width: props.size || 24};
return (
  ${variables.jsx}
)};


${variables.exports};
`;
};

module.exports = template;
