module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "^@Components/(.+)": "./src/components/\\1",
            "^@Hooks/(.+)": "./src/Hooks/\\1",
            "^@Screens/(.+)": "./src/Screens/\\1",
            "^@Api/(.+)": "./src/Api/\\1",
            "^@Models/(.+)": "./src/Models/\\1",
            "^@Utils/(.+)": "./src/Utils/\\1",
          },
        },
      ],
    ],
  };
};
