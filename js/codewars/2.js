//140 likes
//[] "no one likes this"
//["peter"]  "peter  likes this"
//["peter","Alex"] "peter and Alex likes this"
const likes = names => {
    const templates = ["no one likes this"," {name} likes this"
    ," {name} and {name} likes this"," {name},{name} and {name} likes this",
    " {name},{name} and {n} others likes this"];
    let idx =Math.min(names.length,4) ; //哪一个模式
    return templates[idx].replace(/{name}|{n}/g,function(val){
        // console.log(val);
        return val==='{name}'?names.shift():names.length;
    }
    )


    // switch (names.length) {
    //     case 0:
    //         return "no one likes this"
    //     case 1:
    //             return  names[0]+" likes this"
    //     case 2:
    //             return  names[0]+"and"+names[1]+" likes this"
    //     case 3:
    //             return  names[0]+names[1]+"and"+"another two  likes this"
    // }
}
console.log(likes(['wd',"wf",'dw','fw',"wwf"]));
