const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage"
    }
  ]
];

module.exports = function(api) {
  api.assertVersion("^7.2.2");

  // Cache the config separately for each environment
  api.cache.using(() => process.env.NODE_ENV);

  console.log("Running in the " + api.env() + " environment");

  return {
    presets
  };
}
