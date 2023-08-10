const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x33pc7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  viewportWidth: 1720,
  viewportHeight: 1080,
  },
});
