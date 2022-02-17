const { Given, When, Then } = require('@cucumber/cucumber')

Given('User opens http:\\/\\/www.google.com', { timeout: 60 * 1000 }, async function () {
  await this.openUrl('https://www.google.com/')
  await this.acceptCookies()
})

When('User enters {string} into the search bar', async function (string) {
  await this.inputText(string)
})

When('user clicks the search button', async function () {
  await this.clickOnSearch()
})

Then('User can see {string} on the first page of the search results', async function (string) {
  await this.checkBodyTextContains(string)
})
