import { IncomingMessage, ServerResponse, OutgoingHttpHeaders } from 'http';
import UsersController from '../controllers/users';
import removeHyphens from '../helpers/index';

export function handleUsersRoute(req: IncomingMessage, res: ServerResponse, headers: OutgoingHttpHeaders) {
  const queryParams = new URLSearchParams(req.url.split('?')[1]);
  const email = queryParams.get('email');
  const number = queryParams.get('number');

  if (number !== null) {
    const cleanedNumber = removeHyphens(number);
    setTimeout(() => {
      const results = UsersController.searchUsers(email, cleanedNumber);

      if (results) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(results));
      } else {
        res.writeHead(404, headers);
        res.end('Not Found');
      }
    }, 5000);
  } else {
    res.writeHead(400, headers);
    res.end('Number parameter is missing');
  }
}

