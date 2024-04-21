// 서버에서의 블로킹 IO

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.end("HOME");
    } else if (req.url === "/about") {
        res.end("ABOUT");
    } else {
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("server listening on port 3000");
});
