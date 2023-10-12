import http, { OutgoingHttpHeaders } from 'http';
import { handleUsersRoute } from './routes/users';

const CLIENT_PORT = process.env.CLIENT_PORT || 5173;

const headers: OutgoingHttpHeaders = {
  'access-control-allow-origin': `http://localhost:${CLIENT_PORT}`,
  'access-control-allow-methods': 'GET',
};

const server = http.createServer(async (req, res) => {
  const [path] = req.url.split('?');
  if (path === '/users') {
    handleUsersRoute(req, res, headers);
  } else {
    res.writeHead(404, headers);
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
