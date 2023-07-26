const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    URL_API: 'https://graphqlzero.almansi.me/api',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
