const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    projectId: "ho4ny8",
    reporter:"mochawesome",
    env: {
      "url": "https://rahulshettyacademy.com/angularpractice"
         }
  },
});
