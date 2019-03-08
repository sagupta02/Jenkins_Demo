# Description
  *  This is a Node.JS + protractor project to automate E2E Regression Testing for the application http://computer-database.herokuapp.com/computers.
  * Layered Architecture has been used in this project and contains below items:
     * Page Objects
     * Business-functions
     * Tests
     * Test-data
  * Tests can be executed with Multiple browsers. Details can be found at the end of the file. 
     
# Manual Tests
  Detailed manual tests description can be found under the file "Test Scenarios & Test Cases.xlsx"

# Automated Tests
  Please download the project in your local system and follow the below steps to execute the tests.
# Pre-requisites
 * Node Js
 * Protractor (Run npm install -g protractor)
 * IDE (preferred: VS Code)
 * Typescript (global installation)
 * ECMA 2015 standards used

# Installation
 * In Project base Terminal/CMD prompt, run "npm install" to install required dependencies.Try running "protractor --version" to make sure it's working
 * run npm install --save-dev @types/jasmine to install type dependencies for Jasmine 
 * Run "webdriver-manager update"
 * Now start up a server by running webdriver-manager start
   The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

# Running Tests
    In Project base Terminal/CMD prompt, run "npm test" to execute the tests.

# Running Tests with another browser
    By default the browser has been set as 'Chrome'.
    To change browser, modify the property "browserName" to 'firefox' or 'chrome' or 'safari' under <project_Root>/conf.ts

# Further help
    Email:sgsarthak@gmail.com

# Some important commands that solved issues:
* Chrome driver issue, use this in vs code terminal: $ ./node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update
* Check which webdriver is active : which webdriver-manager