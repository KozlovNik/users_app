export const getUserState = (store) => store.users;

export const getUserList = (store) =>
  getUserState(store) ? getUserState(store).allIds : [];

export const getUserById = (store, id) =>
  getUserState(store) ? { ...getUserState(store).byIds[id], id } : {};

export const getUsers = (store) =>
  getUserList(store).map((id) => getUserById(store, id));

export const getUsersByFilters = (store) => {
  let allUsers = getUsers(store);
  const status = store.users.currentStatusFilter;
  const searchWord = store.users.searchWord;
  console.log(allUsers)

  if (["client", "admin", "partner"].includes(status)) {
    allUsers = allUsers.filter((user) => user.status === status);
  }
  console.log(allUsers)
  if (searchWord !== "") {
    allUsers = allUsers.filter(
      (user) =>
        user.email.includes(searchWord) || user.phone.includes(searchWord)
    );
  }
  console.log(allUsers)

  return allUsers;
};
