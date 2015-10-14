Package.describe({
  name: 'constellation:tiny',
  version: '0.3.2',
  summary: 'Minification plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-tiny.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');

  api.use(['templating','reactive-dict','tracker'], 'client');
  api.use('constellation:console@1.2.2', 'client');

  api.addFiles('tiny-client.css','client');
  api.addFiles('tiny-client.html','client');
  api.addFiles('tiny-client.js','client');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});