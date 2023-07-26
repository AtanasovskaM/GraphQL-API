import { select_nonexistantUserAlbum, delete_user_album, select_wrongTypeInput, select_injection } from "./graphql body/GraphQLBody_User"

describe('GraphQL Handling errors', () => {
  
    it('Returns BAD_USER_INPUT error code when deleting a user and album without the mandatory input -', () => {
        cy.graphql_request(delete_user_album).then(res => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("errors");  
        expect(res.body.errors[0]).to.have.property("message");
        cy.get(res.body.errors[0].extensions).should('have.attr', 'code')
        .and('eq', 'BAD_USER_INPUT');         
      })
  });


    it('Returns error code GRAPHQL_VALIDATION_FAILED when selecting a user and album have a non string input', () => {

      cy.graphql_request(select_wrongTypeInput).then(res => {
      expect(res.status).to.eq(400);  
      expect(res.body).to.have.property("errors"); 
      expect(res.body.errors[0]).to.have.property("message"); 
      cy.get(res.body.errors[0].extensions).should('have.attr', 'code')
      .and('eq', 'GRAPHQL_VALIDATION_FAILED');         
    })
});


it('Returns data with null data when non-existant user id and album id is sent', () => {

      cy.graphql_request(select_nonexistantUserAlbum).then(res => { 
      expect(res.status).to.equal(200);
      cy.get(res.body.data.user).should('have.attr', 'id')
      .and('eq', null);       
      cy.get(res.body.data.user).should('have.attr', 'name')
      .and('eq', null);   
      cy.get(res.body.data.album).should('have.attr', 'id')
      .and('eq', null);       
      cy.get(res.body.data.album).should('have.attr', 'title')
      .and('eq', null);  
    })
});

it('Returns data with null when an HTML injection is used as an input', () => {
  
    cy.graphql_request(select_injection).then(res => { 
    expect(res.status).to.equal(200);
    cy.get(res.body.data.user).should('have.attr', 'id')
    .and('eq', null);       
    cy.get(res.body.data.user).should('have.attr', 'name')
    .and('eq', null);   
    cy.get(res.body.data.album).should('have.attr', 'id')
    .and('eq', null);       
    cy.get(res.body.data.album).should('have.attr', 'title')
    .and('eq', null);  
  })
});

});

