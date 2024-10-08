export default function getListStudentIds(arr) {
    /* Check if the argument is an array*/
    if (!Array.isArray(arr)) {
      return [];
    }
  
    /* Use map to return an array of ids*/
    return arr.map(student => student.id);
  }
  