/*
 *最近最少使用原则
 * @param capacity :number 容量
 */
var LRUCache = function (capacity) {
    this.capacity=capacity;//空间上限
    this.arr = [];//数据结构
    this.obj={};
    console.log(this.capacity);
    
};
LRUCache.prototype.get = function (key) {
    // 调整优先级
    return
}
LRUCache.prototype.set = function () {

}

new LRUCache(2);
// console.log(l.capacity);


// get (1) 读操作