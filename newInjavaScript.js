var getGlobal = function() {
    // the only reliable means to get the global object was this, you no longer need to do this


    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

//you can simply use this
const theGlobalThis = globalThis;


class Point {
    #x; //private
    #y; //private

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(point) {
        return this.#x === point.#x && this.#y === point.#y;
    }
}

class Animal {
    constructor(name) {
        this.name = name;

    }

}
class Cat extends Animal {
    constructor(name) {
        super(name);
        this.likesBaths = false;
    }
    mewo() {
        console.log("mewo");
    }
}
class Cat2 extends Animal {
    //no need to call the constructor of the super class
    #
    likesBaths = false;
    mewo() {
        console.log("mewo");
    }
}
//Numeric separators for easier reading code
const million = 1 _000_000;
const billion = 1 _000_000_000;





const object = { x: 42, y: 50 };
const entries = Object.entries(object);
//now we can get the previous object using this
const result = Object.fromEntries(entries);
//but we can filter and map a new object using.filter and .map and return a new object

const obj = { abc: 1, def: 2, ghij: 3 };
const res = Object.fromEntries(
    Object.entries(obj)
    .filter(([key, val]) => key.length === 3)
    .map(([key, val]) => [key, val * 2])
);

// res is { 'abc': 2, 'def': 4 }


var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

//Or you can Use arr2.flat(Infinity);
//[1,2,3,4,5,6]
