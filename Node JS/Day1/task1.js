const fs = require("fs");
// let components;
// let component = handleArgs();
// if (component) {
//     readFile("./task/test.ts", "utf-8", (err, data) => {
//         if (err) components = [];
//         else components = JSON.parse(data);

//         components.push(component);
//         data = JSON.stringify(components);
//         writeFile("./task/test.ts", data, (err) => {
//             console.log(err);
//         });
//     });
// }

// Handle args
function handleArgs() {
    let component;
    switch (process.argv[2]) {
        case "g":
        case "generate":
            switch (process.argv[3]) {
                case "component":
                case "c":
                    fs.mkdir(`${process.cwd()}/${process.argv[4]}`, (err) => {
                        throw err;
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
            }
        default:
            {
                console.log("specify valid operator");
            }
    }
    return component;
}