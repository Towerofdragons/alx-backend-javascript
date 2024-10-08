export default function cleanSet(set, startString){
    /*Identify if StartString is a string */

    if (startString.length === 0 || typeof startString !== 'string')
    {
        return ('');
    }

    /* Filter through the set and join them int a string */
    const array = [...set];
    return array.filter( value => value.startsWith(startString)) /*Find strings starting with starString */
            .map(value => value.slice(startString.length)) /* Obtain substring after startString*/
            .join('-');
}