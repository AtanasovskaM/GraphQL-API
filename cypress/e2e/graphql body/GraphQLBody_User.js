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
  `

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
  `
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
`
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
  }`

export const delete_user = `
mutation (
    $id: ID!
  ) {
    deleteUser(id: $id)
  }`

export const delete_user_album = `
mutation (
    $id: ID!
  ) {
    deleteUser(id: $id)
    deleteAlbum(id: $id)
  }`

export const select_wrongTypeInput = `
  query {
      user(id: fff) {
        id
        username
        email
        phone
      }
      album(id: sss) {
        id
        title
      }
    }
  ` 

  export const select_nonexistantUserAlbum = `
  query {
      user(id: 123) {
        id
        name
        username
        email
        phone
      }
      album(id: 1234) {
        id
        title
      }
    }
  ` 
  export const select_injection = `
  query {
      user(id: "<script>alert('1')</script>") {
        id
        name
        username
        email
        phone
      }
      album(id: "<script>alert('2')</script>") {
        id
        title
      }
    }
  ` 