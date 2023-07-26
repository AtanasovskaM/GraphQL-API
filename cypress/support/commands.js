Cypress.Commands.add('graphql_request', (query, variables = {}) => {
    return cy.request({
      method: 'POST',
      url: Cypress.env('URL_API'),
      body: {
        query,
        variables,
      },
      failOnStatusCode: false
    });
  });