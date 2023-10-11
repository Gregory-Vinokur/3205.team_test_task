import http, { OutgoingHttpHeaders } from "http";
import UsersController from "./controllers/users";
import removeHyphens from "./helpers/index";
// import Users from "./controllers/users";

const headers: OutgoingHttpHeaders = {
  "access-control-allow-origin": "http://localhost:5173",
  "access-control-allow-methods": "GET",
};

const server = http.createServer(async (req, res) => {
  const [path, queryParams] = req.url.split('?');
  if (path === '/users') {
    const searchParams = new URLSearchParams(queryParams);
    const email = searchParams.get('email');
    const number = removeHyphens(searchParams.get('number'));

    setTimeout(() => {
      const results = UsersController.searchUsers(email, number);

      res.writeHead(200, headers);
      res.end(JSON.stringify(results));
    }, 5000);
  } else {
    res.writeHead(404, headers);
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});