var climbStairs = function(n){
    arr = Array.from({length:n+1},v=>0)
    arr[1] = 1;
    arr[2] = 2;
    f(n)
    return arr[n]
}
var arr = []
function f(n){
    // 归 退出条件
    if(arr[n] != 0){
        return arr[n]
    }else{
        arr[n] = f(n-1) + f(n-2)
    }
    return arr[n]
}
// 内存溢出
// - 重复计算
console.log(climbStairs(7));
