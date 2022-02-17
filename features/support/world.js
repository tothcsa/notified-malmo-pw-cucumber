// thanks: https://medium.com/@manabie/how-to-use-playwright-in-cucumberjs-f8ee5b89bccc
const { setWorldConstructor } = require('@cucumber/cucumber')
const playwright = require('playwright')
const expect = require('expect.js')

class CustomWorld {
  async openUrl (url) {
    const browser = await playwright.chromium.launch({
      headless: false
    })
    const context = await browser.newContext({ locale: 'en-GB' })
    this.page = await context.newPage()
    await this.page.goto(url)
  }

  async acceptCookies () {
    await this.page.locator('button:has-text("I agree")').click()
  }

  async inputText (str = 'Notified Malmö') {
    await this.page.locator('[aria-label="Search"]').click()
    await this.page.locator('[aria-label="Search"]').fill(str)
  }

  async clickOnSearch () {
    await this.page.locator('[aria-label="Google Search"]:visible').click()
    await this.page.waitForNavigation()
  }

  async checkBodyTextContains (str) {
    const tx = await this.page.textContent('body')
    expect(tx.includes(str)).to.be.ok()
  }
}

setWorldConstructor(CustomWorld)
