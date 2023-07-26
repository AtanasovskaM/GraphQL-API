export const list_users = `
  query ($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        username
        email
      }
      meta {
        totalCount
      }
    }
  }
  `;

export const select_user = `
  query {
      user(id: 1) {
        id
        name
        username
        email
        phone
      }
    }
  `;

export const create_user = `
mutation ($input: CreateUserInput!)
{
    createUser(input: $input)
    {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

export const update_user = `
mutation (
    $id: ID!,
    $input: UpdateUserInput!
  ) {
    updateUser(id: $id, input: $input) {
      id
      name
      username
    }
  }`;

export const delete_user = `
mutation (
    $id: ID!
  ) {
    deleteUser(id: $id)
  }`;