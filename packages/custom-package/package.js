Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'custom-package'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  // client & server

  api.addFiles([
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/hello.html',
    'lib/client/templates/hello.js',
    'lib/client/templates/custom_post_title.html',
    'lib/client/templates/custom_post_title.js',
    'lib/client/templates/custom_upvote.html',
    'lib/client/templates/custom_post_info.html',
    'lib/client/templates/custom_sidebar.html',
    'lib/client/stylesheets/custom.scss',
  ], ['client']);

});