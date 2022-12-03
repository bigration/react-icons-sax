const comments = `
// Auto-generated file created
`;
const template = (variables, { tpl }) => {
  // console.log(JSON.stringify(variables.jsx.children));
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};



const ${variables.componentName} = (${variables.props}) => {
const mergedStyles = Object.assign({
      display: 'inline-block',
      fill: undefined,
      height: props.size || 24,
      width: props.size || 24,
    }, {});
return (
  ${variables.jsx}
)};
${variables.exports};
`;
};

module.exports = template;
