module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: ['xmlns', 'width', 'height'],
      },
    },
  ],
};
