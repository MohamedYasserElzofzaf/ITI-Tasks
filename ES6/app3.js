/*
    3) create your own object that has [Symbol.replace] method 
    so that if any long string (e.g. its length exceed 15 characters )called replace and 
    pass your object as replace method parameter it will display only 15 character of string with terminating “…”
*/

let object = {
    [Symbol.replace](str) {
        if (str.length > 15) {
            let newWord = str.slice(15);
            return ...newWord;
        }
    },
};
console.log("HelloDarknessMyOldFreind!!!!!!!!!!!!!!!!!!!!!!".replace(object));