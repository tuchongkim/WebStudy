const http = require("http");
const fs = require("fs");

server = http.createServer((req, res) => {
    const { method, url } = req;
    res.setHeader("Content-Type", "text/html");

    // URL에 따라 응답을 다르게 처리
    if (method === "GET" && url === "/home") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
        readStream.pipe(res);
    } else if (method === "GET" && url === "/about") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/about.html", "utf-8");
        readStream.pipe(res);
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});

server.listen(3000, () => {
    console.log("server lisening on port 3000");
});