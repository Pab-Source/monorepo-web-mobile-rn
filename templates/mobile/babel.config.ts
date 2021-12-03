module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-transform-import-paths',
      {
        'lib-themes': 'lib-themes/src/index',
      },
    ],
  ],
};
