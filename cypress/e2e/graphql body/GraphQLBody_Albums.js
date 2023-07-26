export const list_users_albums = `
query ($options: PageQueryOptions) {
    users(options: $options) {
    data {
    id
    name
    albums {
      data {
        id
        title
      }
    }
  }
}
  }
  `;

export const list_albums = `
query (
    $options: PageQueryOptions
  ) {
    albums(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
  `;
export const select_album = `
  query {
      album(id: 1) {
        id
        title
        user {
            id
            name
            username
        }       
      }
    }
  `;

export const create_album = `
mutation (
    $input: CreateAlbumInput!
  ) {
    createAlbum(input: $input) {
      id
      title
      user {
        id
        name
      }
    }
  }
`;
export const update_album = `
mutation (
    $id: ID!,
    $input: UpdateAlbumInput!
  ) {
    updateAlbum(id: $id, input: $input) {
      id
      title
      user {
        id
        name
      }
    }
  }`;

export const delete_album = `
mutation (
    $id: ID!
  ) {
    deleteAlbum(id: $id)
  }`;

export const random_album = `
query {
  album(id: '@#$') {
    id
    title
    user {
        id
        name
        username
    }       
  }
}`;
