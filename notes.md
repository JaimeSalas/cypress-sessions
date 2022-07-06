### Cypress Features

* Time travel & debugging
* Automatic waiting
* Reliable and Fast (No third libraries such as WebDriver or Selenium)
* Screenshots and Videos
* Spies, Stubs and Clocks
* Network Traffic Control

```js
describe("Navigation", () => {
    it("sholuld navigate to page", () => {
        cy.visit("/page");
        cy.get("h1").contains("My Title");
    });
});
```

|               Before Cypress              | With Cypress |
|:-----------------------------------------:|:------------:|
| Framework (Mocha, Jasmine, Karma)         |              |
| Assertion Library (Chai, Expect.js)       |              |
|             Install Selenium              |   Cypress    |
| Selenium Wrapper (Protractor, Nightwatch) |              |
|         Other (Sinon, TestDouble)         |              |


* All in one inclusive testing framework
* It is for both developers and QA engineers
* Has native access to EVERYTHING 
* Framework agnostic
* Written only in JavaScript
* Flake resistant - Very hard to miss events

* Do not use Cypress for 
    - Indexing the web
    - Performance testing
    - Spidering links
* Cypress should be used to test your own application as you build it
* Not meant for manual testers or exploratory testing

`cy.exec()` `cy.task()` `cy.request()`

```js
it('navigates', () => {
    cy.visit('https://lemoncode.net');
    cy.visit('https://booking.com'); // Throws error!!
});

// move to a different origin to another test
it('navigates', () => {
    cy.visit('https://lemoncode.net'); // Works
});

it('navigates', () => {
    cy.visit('https://booking.com'); // Works
});
```


- There is no native or mobile events support
- iframe support is limited
- Workarounds for lack of *cy.hover()*
- No *cy.tab()* command
- Testing file uploads/downloads is app specific

```bash
npm i cypress -D
npm run test:e2e
```

```html
<button
    id="main"
    class="btn btn-large"
    name="submission"
    role="button"
    data-cy="submit"
>
    Submit
</button>
```

```js
cy.get('button').click(); // Wrong!!
cy.get('.btn.btn-large').click(); // Wrong!!
cy.get('#main').click(); // Wrong!
cy.get('[name=submmission]').click(); // Wrong!
cy.contains('Submit').click(); // Good
cy.get('[data-cy=submit]').click(); // Good
```