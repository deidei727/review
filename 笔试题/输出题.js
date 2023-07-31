// 1.async await 
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end');

// 2.事件循环机制题
setTimeout(() => {
  console.log(1);
}, 0);

new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
}).then(() => {
  console.log(4);
});

const promise2 = new Promise(async (resolve) => {
  resolve()
  console.log(await resolve(5));   //undefined

  console.log(6);
});

async function test() {
  console.log(7);
  console.log(await promise2);  //5
  console.log(8);
}

test();
console.log(9);


// 3.promise链式调用
let p1 = Promise.resolve()
  .then(function f1(v) { console.log(1) })
  .then(function f2(v) { console.log(2) })
  .then(function f3(v) { console.log(3) })

p1.then(function f4(v) { console.log(4) })
p1.then(function f5(v) { console.log(5) })

let p2 = Promise.resolve()
  .then(function f11(v) { console.log(11) })
  .then(function f22(v) { console.log(22) })
  .then(function f33(v) { console.log(33) })

p2.then(function f44(v) { console.log(44) })
p2.then(function f55(v) { console.log(55) })

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 0)
  })(i)

}