export const new_album = {
  input: {
    title: "Title of a new book",
    userId: 5,
  },
};

export const total_albums = {
  options: {},
};

export const updated_album = {
  id: 31,
  input: {
    title: "Title of a new book 2023",
    userId: 4,
  },
};

export const delete_albumId = {
  id: 55,
};

export const orderByDESC_id = 
{
  options: {
    sort: {
    field: "id",
    order: "DESC"
  }   
}};

export const orderByDESC_title = 
{
  options: {
    sort: {
    field: "title",
    order: "DESC"
  }   
}};

export const orderByASC_id = 
{
  options: {
    sort: {
    field: "id",
    order: "ASC"
  }   
}};

export const orderByASC_title = 
{
  options: {
    sort: {
    field: "title",
    order: "ASC"
  }   
}};

export const limit_pageAlbums = 
{
  options: {
    paginate: {
      page: 5,
      limit: 10
    }
  }
};

export const search_title = 
{
  options: {
    search: {
      q: "ab rerum non rerum consequatur ut ea unde"
    }
  }
};

export const search_nonAlbum = 
{
  options: {
    search: {
      q: "title of a new album"
    }
  }
};

export const limit_negative = 
{
  options: {
    paginate: {
      limit: -60
    }
  }
};


