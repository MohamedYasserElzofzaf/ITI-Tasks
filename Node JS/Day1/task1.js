const fs = require("fs");

switch (process.argv[2]) {
    case "g":
    case "generate":
        switch (process.argv[3]) {
            case "component":
            case "c":
                fs.readFile("component.txt", "utf-8", (err, data) => {
                    if (err) {
                        console.log("Error");
                    } else {
                        fs.mkdir(`${process.cwd()}/${process.argv[4]}`, (err) => {
                            if (err) throw err;
                        });
                        fs.writeFileSync(
                            `${process.cwd()}/${process.argv[4]}/${
                process.argv[4]
              }.component.ts`,
                            `
                        export class ${process.argv[4]}Component {
                            constructor() { }
                        }
                        `
                        );
                        fs.writeFileSync(
                            `${process.cwd()}/${process.argv[4]}/${
                process.argv[4]
              }.component.html`,
                            `<p>${process.argv[4]} Works </p>`
                        );
                        fs.writeFileSync(
                            `${process.cwd()}/${process.argv[4]}/${
                process.argv[4]
              }.component.css`,
                            `/* ${process.argv[4]} style */`
                        );
                    }
                });
                break;
        }
    case "server":
    case "s":
        fs.readFile("server.txt", "utf-8", (err, data) => {
            if (err) {
                console.log("Error");
            } else {
                fs.mkdir(`${process.cwd()}/${process.argv[4]}`, (err) => {
                    if (err) throw err;
                });
                fs.writeFileSync(
                    `${process.cwd()}/${process.argv[4]}/${process.argv[4]}.server.ts`,
                    ""
                );
                fs.writeFileSync(
                    `${process.cwd()}/${process.argv[4]}/${
            process.argv[4]
          }.server.spec.ts`,
                    `/* ${process.argv[4]} Test */`
                );
            }
        });
        break;

    default:
        {
            console.log("specify valid operator");
        }
}