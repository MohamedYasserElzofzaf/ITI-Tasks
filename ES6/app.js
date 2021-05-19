/* 
    1) Create your own function that accepts multiple parameters to generate course information and display it. 
    Assume that the function accepts course information as object that contains courseName, courseDuation, courseOwner. 
    if any of required field is not set in function call it should have default values as follows: 
    courseName=”ES6” , courseDuration=”3days”, courseOwner=”JavaScript”.
    Bonus: through exception if passed object includes properties other than those described above
    Note: user is allowed not to pass all of these properties, he can pass needed properties only
*/

function course(msg, options = {}) {
    let defaultCourse = {
        courseName: "ES6",
        courseDuration: "3days",
        courseOwner: "JavaScript",
    };
    let settings = Object.assign({}, defaultCourse, options);
    return (
        msg +
        " " +
        settings.courseName +
        ": " +
        settings.courseDuration +
        " " +
        settings.courseOwner
    );
}
let x = course("Welcome in", { courseName: "Html5" });
console.log(x);