import data from "../../db/users.json";

class UsersController {
  static searchUsers(email: string, number: string) {
    const results = data.filter(user => {
      return (!email || user.email === email) && (!number || user.number === number);
    });

    return results;
  }
}

export default UsersController;