//find the Toper name of the class. comapre with MAth.max and get the toper name.

/*let Jim=5, Dela=2, Chuchu=10
function max(a,b,c){
    result =Math.max(a,b,c)
   
    if(result===10){
        return 'Chuchu'
    }else if(result===2){
        return 'Dela'
    }else{
        return 'Jim'
    }
    
}
console.log(max(Jim,Dela,Chuchu))*/

// another way 
let maxScore=0
const resultBoard={
    Jim:5, 
    Dela:2, 
    Chuchu:10
};

function max(resultBoard){
    for(let student in resultBoard){
        if(resultBoard[student]>maxScore){
            maxScore=resultBoard[student]
            topper = student;

        }
    }
    return topper
}
console.log(max(resultBoard))