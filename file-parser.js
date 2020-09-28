var fs = require('fs');

var getAllCourses = function (dir) {
    var results = [];
    
    fs.readdirSync(dir).forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllCourses(file));
        } else {
            results.push(file);
        }
    })

    return results;
}

module.exports = {
    getAllCourses: getAllCourses
}
