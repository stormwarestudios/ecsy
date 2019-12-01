try {
  const window = window || {};
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

export { World } from "./World.js";
export { System, Not } from "./System.js";
export { Component } from "./Component.js";
export { SystemStateComponent } from "./SystemStateComponent.js";
export { TagComponent } from "./TagComponent.js";
export { createComponentClass } from "./CreateComponentClass.js";
export { createType } from "./CreateType.js";
export { Types } from "./StandardTypes.js";
export { Version } from "./Version.js";
