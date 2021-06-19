const yargs = require("yargs");
let command = yargs.argv._[0];
let params = yargs.argv;

if (command === "g c" || command === "generate component") {
    fs.readFile("component.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error");
        } else {
            fs.mkdir(`${process.cwd()}/${params[4]}`, (err) => {
                if (err) throw err;
            });
            fs.writeFileSync(
                `${process.cwd()}/${params[4]}/${params[4]}.component.ts`,
                `
                        export class ${params[4]}Component {
                            constructor() { }
                        }
                        `
            );
            fs.writeFileSync(
                `${process.cwd()}/${params[4]}/${params[4]}.component.html`,
                `<p>${params[4]} Works </p>`
            );
            fs.writeFileSync(
                `${process.cwd()}/${params[4]}/${params[4]}.component.css`,
                `/* ${params[4]} style */`
            );
        }
    });
} else if (command === "g s" || command === "generate server") {
    fs.readFile("server.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error");
        } else {
            fs.mkdir(`${process.cwd()}/${params[4]}`, (err) => {
                if (err) throw err;
            });
            fs.writeFileSync(
                `${process.cwd()}/${params[4]}/${params[4]}.server.ts`,
                ""
            );
            fs.writeFileSync(
                `${process.cwd()}/${params[4]}/${params[4]}.server.spec.ts`,
                `/* ${params[4]} Test */`
            );
        }
    });
} else {
    console.log("specify valid operator");
}