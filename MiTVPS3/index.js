var plugin = require('plugin');
var page = require('page');

plugin.createService(
  "Mi TV PS3",
  "mitvps3:start",
  "video",
  true,
  plugin.path + "icon.png"
);

plugin.addURI("mitvps3:start", function(page) {
  page.metadata.title = "Mi TV PS3";

  page.appendItem("mitvps3:accion", "directory", {
    title: "Acción"
  });

  page.appendItem("mitvps3:comedia", "directory", {
    title: "Comedia"
  });

  page.appendItem("mitvps3:infantil", "directory", {
    title: "Infantil"
  });

  page.type = "directory";
  page.loading = false;
});

plugin.addURI("mitvps3:accion", function(page) {
  page.metadata.title = "Acción";

  page.appendItem("videoparams:{" +
    "\"title\":\"Canal Acción 1\"," +
    "\"canonicalUrl\":\"accion1\"," +
    "\"sources\":[{\"url\":\"https://raw.githubusercontent.com/santyagobm4-cmyk/iptv-listas/refs/heads/main/tv\"}]" +
  "}", "video", {
    title: "Canal Acción 1"
  });

  page.loading = false;
});
