// // 1.回文链表 其中传入的arr是将链表转换成的数组
// function fun(arr){
//     let right=arr.length-1
//     let left=0
//     while(left<right){
//         if(arr[left]==arr[right]){
//             left++
//             right--
//         }else{
//             return false
//         }
//     }
//     return true
// }

// // 2.两个数组的每一项组成一个数组插入到数组中[1,2,3],[5,6,7] ==>[[1,5],[2,6],[3,7]]
// let res=[]
// function mergeArr(arr1,arr2){
//     if(!arr1.length){
//         return
//     }
//     const [a,...b]=arr1
//     const [c,...d]=arr2
//     res.push([a,c])
//     mergeArr(b,d)
//     return res
// }

// // 3.字符串中出现次数最多的个数 
// // eg：const arr = ['hwwwwo', 'world', 'test', 'best'];  结果：4
// function getMaxSameCharCount(arr) {
//     let count = 0;
//   return arr.reduce((maxCount, str) => {
//     const charCount = {};
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       charCount[char] = (charCount[char] || 0) + 1;
//       count = Math.max(count, charCount[char]);
//     }
//     return Math.max(maxCount, count);
//   }, 0);
// }



// // 4.原型继承的实现
//   function Parent(name,age){
//     this.name=name
//     this.age=age
//   }
//   Parent.prototype.jicheng=function(){
//     console.log('123')
//   }
//   function Son(name,sex){
//     this.name=name
//     this.sex=sex
//   }
//   Son.prototype=new Parent()
//   let son= new Son('小米','男')
//   let parent=new Parent('baba','43')
// son.jicheng()

// // 5.扁平数据转换成tree结构
// // [{id: 12, pid: null,val:1},{id: 13, pid: 12,val:45}]
// //  [id: 12,val:1,children:[{id: 13, val: 45}]]
// let arr=[
//     {id: 1, name: 'A', pid: null},
//     {id: 2, name: 'B', pid: 1},
//     {id: 3, name: 'C', pid: 1},
//     {id: 4, name: 'D', pid: 2},
//     {id: 5, name: 'E', pid: 2},
//     {id: 6, name: 'F', pid: 3},
//     {id: 7, name: 'G', pid: 3},
//     {id: 8, name: 'H', pid: 4},
//   ]
// function change(arr){
//     let tree=[]
//     let map={}
//     arr.forEach(node => {
//         map[node.id]=node
//         node.children=[]
//     });
//     arr.forEach(node=>{
//         if(node.pid){
//             map[node.pid].children.push(node)
//         }else{
//             tree.push(node)
//         }
//     })
//     return tree
// }


// // 6.数组扁平化
// var arr1 = [
//   [1, 2],
//   [3, 4],
//   [
//       [5,6],
//       [7,8]
//   ],
//   9
// ]
// function flatten(arr) {
//   let res=[]
//   for (let i=0; i<arr.length; i++) {
//       if(Array.isArray(arr[i])) {
//         res=res.concat(flatten(arr[i]))  
//       }else{
//           res.push(arr[i])
//       }
//   }
//  return res
// }

// // 7.new的过程
// function myNew() {

//     var obj = new Object(),

//     Constructor = [].shift.call(arguments);

//     obj.__proto__ = Constructor.prototype;

//     var ret = Constructor.apply(obj, arguments);

//     return typeof ret === 'object' ? ret : obj;

// };

// // 8.输出结果题（有关new的过程的）
// function Otaku (name, age) {
//     this.strength = 60;
//     this.age = age;

//     return {
//         name: name,
//         habit: 'Games'
//     }
// }

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // undefined
// console.log(person.age) // undefined


// 9.最长无重复字串 eg：pwwkwe
let s="pwwkwer"
function longestUniqChar(str) {
    let set=new Set()
    let left=0
    let res=0
    for(let i=0;i<str.length;i++){
      while(set.has(str[i])){
        set.delete(str[left]) 
        left++
      }
      set.add(str[i])
      res=Math.max(res,i-left+1)
    }
return res
}

console.log(longestUniqChar(s))