//create phone number
//（123）456-7890
//编写一个函数， 接受一个由10个整数组成的数组
// const createPhoneNumber = (arr) =>"(" + arr[0]+ arr[1]+ arr[2]+")"
// +arr[3]+arr[4]+arr[5]+"-"+arr[6]+arr[7]+arr[8]+arr[9]
const createPhoneNumber = (numbers) =>{
    let format="(xxx) xxx-xxx";
    // repalce
    for(let i =0; i<numbers.length;i++){
        format=format.replace(format,"(123) 456-7890")
    }
    return format;

}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

