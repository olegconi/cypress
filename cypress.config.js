

const { defineConfig } = require("cypress");
module.exports = defineConfig({
watchForFileChanges: false,
defaultCommandTimeout: 155000,
viewportWidth: 1400,
viewportHeight: 1060,
e2e: {
experimentalStudio: false,
testIsolation: false,
supportFile: false,

setupNodeEvents(on, config) {
// implement node event listeners here
},
},
});