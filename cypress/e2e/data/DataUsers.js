export const new_user = {
  input: {
    name: "Michael",
    username: "Mike",
    email: "mike@example.com",
    phone: "0293749202",
    website: "websitemike.com",
  },
};

export const updated_user = {
  id: 5,
  input: {
    name: "Magdalena",
    username: "Maggie",
  },
};

export const total_users = {
  options: {},
};

export const delete_userId = {
  id: 3,
};

export const orderByDESC_id = 
{
  options: {
    sort: {
    field: "id",
    order: "DESC"
  }   
}};

export const orderByDESC_name = 
{
  options: {
    sort: {
    field: "name",
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

export const orderByASC_name = 
{
  options: {
    sort: {
    field: "name",
    order: "ASC"
  }   
}};

export const limit_pageUser = 
{
  options: {
    paginate: {
      page: 2,
      limit: 4
    }
  }
};

export const search_user = 
{
  options: {
    search: {
      q: "Chelsey Dietrich"
    }
  }
};

export const search_nonUser = 
{
  options: {
    search: {
      q: "Magdalena Atanasovska"
    }
  }
};

export const limit_negative = 
{
  options: {
    paginate: {
      limit: -7
    }
  }
};

