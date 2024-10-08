export default function hasValuesFromArray(myset, myarray){
    /** Use every to test if all elements pass test provided by function*/
    return myarray.every(value => myset.has(value));
}