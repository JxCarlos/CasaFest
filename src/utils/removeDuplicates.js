
export const removeDuplicates = (inArray) => {
    
    const arr = inArray.concat()
    for(let i=0; i<arr.length; ++i) { 
        for(let j=i+1; j<arr.length; ++j) { 
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }

    for(let k=0; k<arr.length; ++k) { 
        const total = arr.filter(element => element === arr[k])
        if(total.length > 1) {
            const newArray = arr.concat();
            removeDuplicates(newArray)
            return arr;
        }
    }
    return arr;
} 