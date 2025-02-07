// this is a function that filter an array and return posetive numbers
/**
 * 
 * @param {array}
 * @returns filtered arrat
 */
export function filterArr(array){
    return array = array.filter((value)=>{
        return value >= 0;
    })
}