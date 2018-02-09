/**
 * 数组相关api简化
 * 
 * author: dkplus <dkplus@qq.com>
 * date: 2018.02.05
 * version: $1.0.0$
 */

var array = {
    // 数组去重系列
    //双层循环，性能极差
    doubleLoopUniq: (arr) => {
        let result = [];
        for(let i = 0,len = arr.length,isExist; i <len; i++) {
            isExist = flase;
            for (let j = 0, rLen = result.length; j <rLen; j++) {
                if (result[j] === arr[i]) {
                    isExist = true;
                    break;
                }
            }
            !isExist && result.push(arr[i]);
        }
        return result;
    },
    //indexof，性能一般，被sort排序甩出几条街
    indexOfUniq: (arr) => {
        let result = [];
        for (let i = 0, len = arr.length; i <len; i++) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    //sort排序对比，中上性能
    sortUniq: (arr) => {
        let result = [],
            last;
        [...arr].sort().forEach(item => {
            if (item != last) {
                result.push(item);
                last = item;
            }
        });
        return result;
    },
    //哈希表，性能次于es6 set
    hashTable: (arr) => {
        let hashTable = arr.reduce((result, curr, index, array) => {
            result[curr] = true;
            return result;
        },{});
        return Object.keys(hashTable).map(item => {
            parseInt(item, 10);
        })
    },
    //es6 set，限制es6，性能最优
    toSetUniq: (arr) => {
        return Array.from(new Set(arr));
    },
    // splice，对数组本身影响，性能差
    inPlaceUniq: (arr) => {
        let idx = 0;
        while (idx < arr.length) {
            let compare = idx + 1;
            while (compare < arr.length) {
                if (arr[idx] == arr[compare]) {
                    arr.splice(compare, 1);
                    continue;
                }
                ++compare;
            }
            ++idx;
        }
        return arr;
    }
};

module.exports = array;