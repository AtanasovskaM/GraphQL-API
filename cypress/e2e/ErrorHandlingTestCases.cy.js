import { search_nonAlbum } from "./data/DataAlbums";
import { search_nonUser } from "./data/DataUsers";
import {select_nonexistantUserAlbum, delete_user_album, select_wrongTypeInput, select_injection, list_albums, list_users } from "./graphql body/GraphQLBody_Errors";

describe("GraphQL Handling errors", () => {
  it("Should return error when deleting a user and album without the mandatory input -", () => {
    cy.graphql_request(delete_user_album).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("errors");
      expect(res.body.errors[0]).to.have.property("message");
      cy.get(res.body.errors[0].extensions)
        .should("have.attr", "code")
        .and("eq", "BAD_USER_INPUT");
    });
  });

  it("Should return error when selecting a user and album that have a non string input", () => {
    cy.graphql_request(select_wrongTypeInput).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body).to.have.property("errors");
      expect(res.body.errors[0]).to.have.property("message");
      cy.get(res.body.errors[0].extensions)
        .should("have.attr", "code")
        .and("eq", "GRAPHQL_VALIDATION_FAILED");
    });
  });

  it("Should return null data when non-existant user id and album id is selected", () => {
    cy.graphql_request(select_nonexistantUserAlbum).then((res) => {
      expect(res.status).to.equal(200);
      cy.get(res.body.data.user).should("have.attr", "id").and("eq", null);
      cy.get(res.body.data.user).should("have.attr", "name").and("eq", null);
      cy.get(res.body.data.album).should("have.attr", "id").and("eq", null);
      cy.get(res.body.data.album).should("have.attr", "title").and("eq", null);
    });
  });

  it("Should return null data when an HTML injection is used as an input", () => {
    cy.graphql_request(select_injection).then((res) => {
      expect(res.status).to.equal(200);
      cy.get(res.body.data.user).should("have.attr", "id").and("eq", null);
      cy.get(res.body.data.user).should("have.attr", "name").and("eq", null);
      cy.get(res.body.data.album).should("have.attr", "id").and("eq", null);
      cy.get(res.body.data.album).should("have.attr", "title").and("eq", null);
    });
  });

  it("Should return empty array when nonexistant user is searched", () => {
    cy.graphql_request(list_users, search_nonUser).then((res) => {
      expect(res.status).to.equal(400);
      expect(res.body).to.have.property("errors");
      expect(res.body.errors[0]).to.have.property("message");
    });
  });

  it("Should return empty array when nonexistant album is searched", () => {
    cy.graphql_request(list_albums, search_nonAlbum).then((res) => {
      expect(res.status).to.equal(400);
      expect(res.body).to.have.property("errors");
      expect(res.body.errors[0]).to.have.property("message");
    });
  });
});