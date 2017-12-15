/* eslint-env node */
import { isPresent } from "@ember/utils";
("use strict");

var defaultConfig = {
  container: "GTM-XXXXXX",
  injectFlickerSnippet: true
};

module.exports = {
  name: "ember-google-optimize",
  contentFor: function(type, config) {
    var addonConfig = Object.assign(
      {},
      defaultConfig,
      config.googleOptimize || {}
    );

    if (
      type === "head" &&
      isPresent(addonConfig.container) &&
      addonConfig.injectFlickerSnippet === true
    ) {
      return [
        "<style>",
        ".async-hide {",
        "opacity: 0 !important",
        "}",
        "</style>",
        "<script>",
        "(function (a, s, y, n, c, h, i, d, e) {",
        "s.className += ' ' + y; h.start = 1 * new Date;",
        "h.end = i = function () { s.className = s.className.replace(RegExp(' ?' + y), '') };",
        "(a[n] = a[n] || []).hide = h; setTimeout(function () { i(); h.end = null }, c); h.timeout = c;",
        "})(window, document.documentElement, 'async-hide', 'dataLayer', 4000,",
        "{ '" + addonConfig.container + "': true });",
        "</script>"
      ].join("\n");
    }

    return "";
  }
};
