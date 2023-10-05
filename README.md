# tryMocha Testing With Simple Project

This is a sample testing project using Mocha, a powerful JavaScript testing framework.

## Prerequisites

Before you can run the tests, make sure you have Node.js and npm (Node Package Manager) installed on your system. You also need to install the required dependencies. Run the following command to install the dependencies:

```bash
npm install

npm install mocha --save-dev

npm install mochawesome-report-generator mochawesome --save-dev

npm install --save-dev screenshot
```

## Running the tests

This command will run Mocha tests according to the configuration specified in the package.json file.

```bash
npm test
```

## Mochawesome Test Reports

After running your tests, you will find the generated reports in the "myReport" folder. This folder contains the following files:

- mochawesome.html: The main HTML report file. Open this file in a web browser to view detailed test results.

- mochawesome.json: A JSON representation of the report data, useful for further processing or integration.

- assets: This folder contains CSS and JavaScript assets used by the HTML report.

- screenshots (if configured): If you have configured your tests to take screenshots, this folder will contain the captured screenshots.
