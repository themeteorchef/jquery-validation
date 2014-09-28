Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles('themeteorchef:jquery-validation.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('themeteorchef:jquery-validation');
  api.addFiles('themeteorchef:jquery-validation-tests.js');
});
