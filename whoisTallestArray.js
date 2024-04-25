let maxIndividualHeight=0
const heights=[188,167,190,176]

function maxHeight(heights){
    for(let height in heights){
        if(heights[height]>maxIndividualHeight){
            maxIndividualHeight=heights[height]
        }
    }
    return maxIndividualHeight
}

console.log(maxHeight(heights))