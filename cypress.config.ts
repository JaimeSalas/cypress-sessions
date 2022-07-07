import { defineConfig } from "cypress";
import webpack from '@cypress/webpack-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

export async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js']
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  );

  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: [
      'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
      '**/*.feature'
    ],
    baseUrl: 'http://localhost:8080/#'
  },
});
