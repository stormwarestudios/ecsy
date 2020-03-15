const window = window || {};
try {
  const { performance } = require("perf_hooks");
  global.performance = performance;
} catch (e) {
  console.log(
    `perf_hooks unavailable; assuming fallback to window.performance is OK.`
  );
}

// if (window && window.performance) {
//   // Do nothing
// } else {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// }
//
// if (typeof window === "undefined") {
//   //console.log(`Node.js`);
// } else {
//   //console.log(`Browser`);
// }

export { World } from "./src/World.js";
export { System, Not } from "./src/System.js";
export { Component } from "./src/Component.js";
export { SystemStateComponent } from "./src/SystemStateComponent.js";
export { TagComponent } from "./src/TagComponent.js";
export { createComponentClass } from "./src/CreateComponentClass.js";
export { createType } from "./src/CreateType.js";
export { Types } from "./src/StandardTypes.js";
export { Version } from "./src/Version.js";
