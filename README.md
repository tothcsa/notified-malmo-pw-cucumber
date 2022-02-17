# notified-malmo-pw-cucumber

This is a demo project in CucumberJS and Playwright

## Requirements

- NodeJS [https://nodejs.org]
- Yarn [https://yarnpkg.com]

## Frameworks

- CucumberJS [https://github.com/cucumber/cucumber-js]
- Playwright [https://playwright.dev/]
- expect.js [https://github.com/Automattic/expect.js/]

## Install

- Pull this project `git pull`
- In the project library run command:
  - `npm install` or
  - `yarn`

## Test Run

- In the project library run command:
  - `yarn test`

## Structure

- The structure of the project is based on the official documentation.
  - Features: `./features`
    - test file: `./features/search.feature`
  - Support: `./features/support`

## Expectations

- The result page has to contain the given text.

```javascript
// ./features/support/world.js
async checkBodyTextContains (str) {
  const tx = await this.page.textContent('body')
  expect(tx.includes(str)).to.be.ok()
}
```

- When you'll run the test script, you have to get something like this:

```text
1 scenario (1 passed)
4 steps (4 passed)
0m07.560s (executing steps: 0m07.522s)
```

## Localization

- The context of chromium-browser is located: `en-GB`

```javascript
// ./features/support/world.js
const context = await browser.newContext({ locale: 'en-GB' })
```
