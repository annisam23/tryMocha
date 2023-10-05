const { By, Builder ,Key} = require('selenium-webdriver');
const addContext = require("mochawesome/addContext");
const chai = require("chai");
const should = chai.should();

describe('Test Mocha', function () {
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
            const imageFileName = this.currentTest.title + '.jpeg';
            const screenshot = await driver.takeScreenshot();
            require('fs').writeFileSync('./screenshots/' + imageFileName, screenshot, 'base64');
            addContext(this, 'Failed test screenshot:');
            addContext(this, './screenshots/' + imageFileName);
        }else {
            const imageFileName = this.currentTest.title + '-passed.jpeg';
            const screenshot = await driver.takeScreenshot();
            require('fs').writeFileSync('./screenshots/' + imageFileName, screenshot, 'base64');
            addContext(this, 'Passed test screenshot:');
            addContext(this, './screenshots/' + imageFileName);
        }
        await driver.quit();
    });

    it("Successfully adds a todo to application", async () => {
        // Navigate to the application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        // Add a todo
        const todoInput = await driver.findElement(By.id("sampletodotext"));
        await todoInput.sendKeys("Learn Mocha", Key.RETURN);

        // Assert
        const lastTodo = await driver.findElement(By.xpath("//li[last()]")).getText();
        lastTodo.should.equal("Learn Mocha");
    });

    it("Successfully search in Google", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://google.com');
        const inputGoogle = await driver.findElement(By.className('gLFyf')).sendKeys('learn Mocha');
        await driver.quit();
    });

    it("Successfully search 'Learn Mochawesome' in Google", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://google.co.in');
        const inputGoogle = await driver.findElement(By.id('APjFqb')).sendKeys('learn Mochawesome');
        await inputGoogle.click();
        await driver.quit();
    }); 
});
