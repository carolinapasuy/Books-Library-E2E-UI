import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    chromeWebSecurity: false, 
    setupNodeEvents(on, config) {
      config.video=false;
      config.screenshotOnRunFailure=false;
      // modify config values examples
      // config.defaultCommandTimeout = 10000

      // IMPORTANT return the updated config object
      return config;
    },
  },
});