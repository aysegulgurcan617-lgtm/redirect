import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: "https://seninsiten.com"
  });
  res.end();
});

server.listen(3000);
