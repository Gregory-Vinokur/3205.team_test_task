import data from "../../db/users.json";

interface User {
  email: string;
  number: string;
}

class UsersController {
  static searchUsers(email: string, number: string | undefined): User[] {
    const results = data.filter(user => {
      return (user.email === email) && (!number || user.number === number);
    });

    return results;
  }
}

export default UsersController;