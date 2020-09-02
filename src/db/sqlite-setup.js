const parser = require('../../file-parser')
const sqlite = require('sqlite3').verbose();

var courses = parser.getAllCourses('../../public/series')
// console.log(courses)

var videos = [] 
courses.forEach((course) => {
    if (course.endsWith('.mp4')) {
        videos.push(course)
    }
})

console.log(videos);

let db = new sqlite.Database('./course.db', (err) => {
    if (err) {
        console.log("Error occurred during initialising database");
        return new Error("Error occurred during initialising database");
    }
    console.log("Connection is established.")
});

db.run('CREATE TABLE course (name text)', (err, res) => {
    if (err) {
        return console.log("Table name already exists");
    }
    
    console.log("created!!!!!!!!!!!");
});

db.each("SELECT name FROM sqlite_master WHERE type = 'table'", (res, err) => {
    if (err) {
        return console.log(err);
    }
    console.log(res);
})

db.close((err) => {
    if (err) {
        return console.log("Error during closing database");
    }

    console.log("Database successfully closed");
});


