import { select_user, create_user, list_users, update_user, delete_user } from "./graphql body/GraphQLBody_User"
import { new_user, updated_user, total_users, delete_userId } from "./data/DataUsers"

describe('GraphQL Users Test Suite', () => {
    
    it('Lists and counts users - query', () => {
        cy.graphql_request(list_users, total_users).then(res => {
          expect(res.body.data).to.not.have.property("errors");
          expect(res.body.data.users.data).to.have.length(res.body.data.users.data.length);
          expect(res.body.data.users.data[0]).to.have.property('id');
          cy.get(res.body.data.users.data[0]).should('have.attr', 'name')
          .and('eq', "Leanne Graham");
      })
  });

    it('Creates a user - mutation', () => {
        cy.graphql_request(create_user, new_user).then(res => {
            expect(res.body.data).to.not.have.property("errors");
            expect(res.body.data.createUser.name).to.include(new_user.input.name);
            expect(res.body.data.createUser.username).to.include(new_user.input.username);
        })
    });

    it('Selects a user - query', () => {
        cy.graphql_request(select_user).then(res => {
            expect(res.body.data).to.not.have.property("errors");
            expect(res.body.data.user.id).to.include(1);
        })
    });

    it('Updates a user - mutation', () => {
        cy.graphql_request(update_user, updated_user).then(res => {
            expect(res.body.data).to.not.have.property("errors");
            expect(res.body.data.updateUser.id).to.include(updated_user.id);
            expect(res.body.data.updateUser.name).to.include(updated_user.input.name);
        })
    });

    it('Deletes a user - mutation', () => {
        cy.graphql_request(delete_user, delete_userId).then(res => {
            expect(res.body.data).to.not.have.property("errors");
            expect(res.body.data.deleteUser).to.eq(true);
        })
    });
});