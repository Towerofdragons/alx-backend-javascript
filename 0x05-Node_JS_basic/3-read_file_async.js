function countStudents(path){
    const fs = require('fs');
    
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
              // Reject the promise if there's an error
              reject(new Error('Cannot load the database'));
              return;
            }

            const lines = data.split('\n').filter((line) => line.trim() !== '');

            const header = lines[0].split(',');
            const students = lines.slice(1).map((line) => line.split(','));
    
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

            resolve();

        });
    });

}

module.exports = countStudents;