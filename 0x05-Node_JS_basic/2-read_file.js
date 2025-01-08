const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    if (students.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const field = student[header.indexOf('field')];
      const firstname = student[header.indexOf('firstname')];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
  // Handle error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
