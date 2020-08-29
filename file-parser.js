var fs = require('fs');

var _getAllCourses = function (dir) {
    var results = [];
    
    fs.readdirSync(dir).forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllCourses(file));
        } else {
            results.push(file);
        }
    })

    return results;
}

var courses = _getAllCourses('public/series')
// console.log(courses)

var videos = [] 
courses.forEach((course) => {
    if (course.endsWith('.mp4')) {
        videos.push(course)
    }
})

console.log(videos);


