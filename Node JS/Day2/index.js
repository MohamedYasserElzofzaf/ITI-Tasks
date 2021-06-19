var http = require("http");
var fs = require("fs");
const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            {
                let home = fs.readFileSync("./resources/index.html");
                res.writeHead(200, {
                    "content-type": "text/html",
                });
                res.write(home);
                break;
            }
        case "/image":
            {
                let image = fs.readFileSync("./resources/ted.jpg");
                res.writeHead(200, {
                    "content-type": "image/jpg",
                });
                res.write(image);
                break;
            }
        case "/text":
            {
                let file = fs.readFileSync("./resources/text.txt");
                res.writeHead(200, {
                    "content-type": "text/txt",
                });
                res.write(file);
                break;
            }
        default:
            {
                res.statusCode = 404;
                res.end();
            }
    }
});
server.listen(8000, () => {
    console.log("server is listening");
});