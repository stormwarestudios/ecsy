'use strict';

/*const window = window || {};
try {
  const { performance } = require('perf_hooks');
  global.performance = performance;
} catch (e) {
  console.log(
    `perf_hooks unavailable; assuming fallback to window.performance is OK.`
  );
}*/

module.exports = {
  World: require('./World.js'),
  System: require('./System.js'),
  Not: require('./System.js'),
  Component: require('./Component.js'),
  SystemStateComponent: require('./SystemStateComponent.js'),
  TagComponent: require('./TagComponent.js'),
  createComponentClass: require('./CreateComponentClass.js'),
  createType: require('./CreateType.js'),
  Types: require('./StandardTypes.js'),
  Version: require('./Version.js')
};
