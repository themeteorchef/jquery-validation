Package.describe({
  summary: "jQuery Validation by jzaefferer, repackaged for Meteor.",
  version: "1.13.1",
  git: "https://github.com/themeteorchef/jquery-validation"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('jquery');
  api.addFiles([
    'lib/jquery-validation/src/core.js',
    'lib/jquery-validation/src/delegate.js',
    'lib/jquery-validation/src/ajax.js'
  ],'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], ['client', 'server']);
  api.use('jquery', 'client');
  api.use('themeteorchef:jquery-validation');
  api.addFiles('themeteorchef:jquery-validation-tests.js');
});
