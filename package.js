Package.describe({
  name: "planable:tiny",
  version: "0.4.11",
  summary: "Minification plugin for Constellation",
  git: "https://github.com/Planable/constellation-tiny.git",
  documentation: "README.md",
  debugOnly: true,
});

Package.onUse(function (api) {
  api.versionsFrom("2.3");

  api.use(["templating@1.4.1", "reactive-dict", "tracker"], "client");
  api.use("planable:console@1.4.11", "client");

  api.addFiles("tiny-client.css", "client");
  api.addFiles("tiny-client.html", "client");
  api.addFiles("tiny-client.js", "client");

  api.imply("planable:console");
});

Package.onTest(function(api) {
  api.use('tinytest');
});