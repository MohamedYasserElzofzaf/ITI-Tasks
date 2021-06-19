var http = require("http");
var fs = require("fs/promises");
let home;
fs.readdir("./resources")
    .then((data) => {
        home = data;
    })
    .catch((err) => {
        throw err;
    });
const server = http.createServer((req, res) => {
            switch (req.url) {
                case "/":
                    {
                        res.writeHead(200, {
                            "content-type": "text/html",
                        });
                        home.map((file) => {
                            res.write(`<li><a href="${file}">${file}</a></li><br>`);
                        });
                        res.end();
                        break;
                    }
                    /* case "/index.html":
            {
                res.writeHead(200, {
                    "content-type": "text/html",
                });
                fs.readFile(`./resources/index.html`).then((file) => {
                    res.write(file);
                    res.end();
                });
                break;
            }
        case "/image":
            {
                res.writeHead(200, {
                    "content-type": "image/jpg",
                });
                fs.readFile(`./resources/ted.jpg`).then((image) => {
                    res.write(image);
                    res.end();
                });
                break;
            }
        case "/text":
            {
                res.writeHead(200, {
                    "content-type": "text/txt",
                });
                fs.readFile(`./resources/text.txt`).then((file) => {
                    res.write(file);
                    res.end();
                });
                break;
            }
        default:
            {
                res.statusCode = 404;
                res.end();
            }
    }*/
            }); server.listen(8000, () => {
            console.log("server is listening");
        });