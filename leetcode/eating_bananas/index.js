var minEatingSpeed = function(piles,H=8){
       let lo = 1,
           hi=Math.max(...piles);
        while(lo<=hi){
            // lo++
            if(cnaEatAllBananas(piles,H,lo)){
               return lo;
            }
            lo++;
            
        }
        return lo;

}
function cnaEatAllBananas(piles,H,low){
    let h=0;
    for(let pile of piles){
        h +=Math.ceil(pile/low)
    }
    return h<=H;
}
console.log(minEatingSpeed([3,6,7,11]));
