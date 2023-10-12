import data from "../../db/users.json";

class UsersController {
  static searchUsers(email: string, number: string) {
    const results = data.filter(user => {
      return (user.email === email) && (!number || user.number === number);
    });

    return results;
  }
}

export default UsersController;