import {list_users_albums, list_albums, create_album, update_album, select_album, delete_album} from "./graphql body/GraphQLBody_Albums";
import {total_albums, updated_album, delete_albumId, new_album, orderByASC_id, orderByDESC_id, orderByASC_title, orderByDESC_title, limit_pageAlbums, search_title, limit_negative} from "./data/DataAlbums";

describe("GraphQL Albums Test Suite", () => {
  it("Lists and counts users albums - query", () => {
    cy.graphql_request(list_users_albums).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.users.data[0]).to.have.property("id");
      expect(res.body.data.users.data[0].albums.data[0]).to.have.property(
        "title"
      );
    });
  });

  it("Lists all albums - query", () => {
    cy.graphql_request(list_albums, total_albums).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.albums.data[0]).to.have.property("id");
      expect(res.body.data.albums.data[0]).to.have.property("title");
    });
  });

  it("Selects an album - query", () => {
    cy.graphql_request(select_album).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.album.id).to.include(1);
      expect(res.body.data.album).to.have.property("title");
    });
  });

  it("Creates an album - mutation", () => {
    cy.graphql_request(create_album, new_album).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.createAlbum.id).to.eq("101");
      expect(res.body.data.createAlbum.title).to.include(new_album.input.title);
    });
  });

  it("Updates an album by - mutation", () => {
    cy.graphql_request(update_album, updated_album).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.updateAlbum.id).to.include(updated_album.id);
      expect(res.body.data.updateAlbum.title).to.include(
        updated_album.input.title
      );
    });
  });

  it("Deletes an album - mutation", () => {
    cy.graphql_request(delete_album, delete_albumId).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.deleteAlbum).to.eq(true);
    });
  });

  
  it("Sorts albums list in descending order by id - query", () => {
    cy.graphql_request(list_albums, orderByDESC_id).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      cy.get(res.body.data.albums.data[0]).should("have.attr","id")
      .and("eq", "100");
    });
  });

  it("Sorts albums list in descending order by title - query", () => {
    cy.graphql_request(list_albums, orderByDESC_title).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      cy.get(res.body.data.albums.data[0]).should("have.attr","title")
      .and("eq","voluptates delectus iure iste qui");
    });
  });

  
  it("Sorts albums list in ascending order by id - query", () => {
    cy.graphql_request(list_albums, orderByASC_id).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      cy.get(res.body.data.albums.data[0]).should("have.attr","id")
      .and("eq", "1");
    });
  });

  it("Sorts albums list in ascending order by title - query", () => {
    cy.graphql_request(list_albums, orderByASC_title).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      cy.get(res.body.data.albums.data[0]).should("have.attr","title")
      .and("eq","ab rerum non rerum consequatur ut ea unde");
    });
  });

  it("Returns the correct entered page with limited number of albums - query", () => {
    cy.graphql_request(list_albums, limit_pageAlbums).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      expect(res.body.data.albums.data.length).to.eq(10);
      cy.get(res.body.data.albums.data[0]).should("have.attr","id")
      .and("eq", "41");
      cy.get(res.body.data.albums.data[9]).should("have.attr","id")
      .and("eq", "50");
    });
  });

  it("Returns albums list that is smaller by the limit that is a negative number - query", () => {
    cy.graphql_request(list_albums, limit_negative).then((res) => {
      expect(res.body.data.albums).to.not.have.property("errors");
      expect(res.body.data.albums.data.length).to.eq(40);
    });
  });
  
  it("Returns an album's title based on the search input - query", () => {
    cy.graphql_request(list_albums, search_title).then((res) => {
      expect(res.body.data).to.not.have.property("errors");
      cy.get(res.body.data.albums.data[0]).should("have.attr","title")
      .and("eq", "ab rerum non rerum consequatur ut ea unde");
    });
  });
});