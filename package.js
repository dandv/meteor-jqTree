Package.describe({
  summary: "meteor packaged jqTree (https://github.com/mbraak/jqTree)"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jqtree.css', 'client');  
  api.add_files('lib/jqtree-circle.png', 'client');  
  api.add_files('lib/tree.jquery.js', 'client');  
});
