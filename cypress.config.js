const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env:
  {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    url:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
