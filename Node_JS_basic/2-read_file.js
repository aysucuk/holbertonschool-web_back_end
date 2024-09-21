const fs = require('fs');

function countStudents(filePath) {
    let data;

    try {
        data = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        throw new Error('Cannot load the database');
    }

    const lines = data.trim().split('\n');
    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
        const [firstName, field] = line.split(',');

        if (!firstName || !field) continue; // Skip invalid lines

        totalStudents += 1;

        if (!students[field]) {
            students[field] = [];
        }
        students[field].push(firstName);
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
}

module.exports = countStudents;
