const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n').filter(line => line); // Filter out empty lines
        const students = {};

        lines.forEach(line => {
            const [firstName, field] = line.split(',');
            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(firstName);
        });

        const numberOfStudents = lines.length;
        console.log(`Number of students: ${numberOfStudents}`);

        for (const field in students) {
            console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
