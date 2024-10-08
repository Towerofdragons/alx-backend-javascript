export default function createInt8TypedArray(length, position, value){
    /**  returns a new ArrayBuffer with an Int8 value at a specific position. */
   if (position > length || position < 0){
        throw new Error('Position outside range');
   } 

   const buffer =  new ArrayBuffer(length);
   const int8arr =  new Int8Array(buffer);

   /*Set value at specified position */

   int8arr[position] = value;

   return int8arr;
}