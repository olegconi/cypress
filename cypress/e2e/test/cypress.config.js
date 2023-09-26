const { defineConfig } = require("cypress");
module.exports = defineConfig({
watchForFileChanges: true,
defaultCommandTimeout: 25000,
viewportWidth: 1400,
viewportHeight: 1060,
e2e: {
experimentalStudio: false,
testIsolation: false,
setupNodeEvents(on, config) {
// implement node event listeners here
},
},
});