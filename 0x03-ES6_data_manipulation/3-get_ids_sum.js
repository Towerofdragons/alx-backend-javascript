export default function getStudentIdsSum(array) {
    /* Sum up all student IDs for all students */
    return array.reduce((sum, array) => {
        return sum += array.id;
    }, 0);
}