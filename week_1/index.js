let arr = [{
    name : "deepanshu",
    age : '19',
    gender : 'male'
},{
    name:'priya',
    age:"32",
    gender : 'female'
},{
    name:'rahi',
    age:"89",
    gender : 'male'
}];

function gender(arr){
    let arr2 =[];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]['gender']== 'male' && arr[index]['age']>=18) {
            arr2.push(arr[index]);
        }
        
    }
    return arr2;
}

console.log(gender(arr));