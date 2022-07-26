/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * авторизация.
       */
       login(phone: string, pass: string): void;
    }
  }