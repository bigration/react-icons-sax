module.exports = {
  plugins: [
    // {removeAttrs: {attrs:['fill']}},
    {
      name: 'removeAttrs',
      params: {
        attrs: ['path:fill', 'xmlns', 'width', 'height'],
      },
    },
  ],
};
