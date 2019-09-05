//total/num*2 抢的公平
function hongbao(total, num) {
    const arr = [];
    let restAmount = total;//余下的钱
    let restNum = num;//没领的人数
    for (let i = 0; i < num-1; i++) {
        let amount =parseFloat(Math.random() * (restAmount / restNum)*2).toFixed(2);
        restNum--;
        restAmount-=amount;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(100,10));

