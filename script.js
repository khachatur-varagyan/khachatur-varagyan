// const arr=[15,9,21,56,65,78,85,36,47,98];
// const arr1=[0,10,20,30,40,50,60,70,80,90,100];
//  const result=arr.reduce((acc,item,)=>{
//      for(let i=0,j=1;i<arr1.length,j<arr1.length;i++,j++){
//          const filt=arr.filter((item)=>{
//              return item>arr1[i] && item<arr1[j]
//          })
//          acc[`${arr1[i]}-${arr1[j]}`]=filt.length;
//      }
//
//      return acc
//  },{})
// console.log(result)

// const arr=[[2,3],[5,[6,8,[15,[23]]]],[5],2]
//
// function newArray(arr) {
//     return arr.reduce((acc,item)=>{
//         if(Array.isArray(item)){
//             acc=acc.concat(newArray(item))
//         }else{
//             acc.push(item)
//         }
//         return acc
//     },[])
// }
// console.log(newArray(arr))

// ([1,2,3,4,5,6,7],2)

// function foo(arr,index){
//     let arr1=[];
//     let j=0;
//     for(let i=0;i<arr.length;i+=2){
//         arr1[j]=arr.slice(i,index);
//         index+=2;
//         j++
//     }
//       return arr1
// }
// console.log(foo([1,2,3,4,5,6,7],2))