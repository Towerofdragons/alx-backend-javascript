export default function updateStudentGradeByCity(students, city, newGrades){
    /*eturns an array of students for a specific city with their new grade */

    return students.filter((student) => {return student.location === city})
                    .map((student) => {
                         const grades = newGrades.find((grade) => { return grade.studentId == student.id});

                         return{
                            ...student, /* Spread the current student object */
                            grade: grades ? grades.grade : 'N/A'
                         };
                    });

}