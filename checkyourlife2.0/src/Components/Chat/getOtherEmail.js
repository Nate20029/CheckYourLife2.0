const getOtherEmail = (users, currenUser) => users?.filter((user) => user !== currenUser.email)[0];

export default getOtherEmail;
