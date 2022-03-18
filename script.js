const arr=[15,9,21,56,65,78,85,36,47,98];
const arr1=[0,10,20,30,40,50,60,70,80,90,100];
 const result=arr.reduce((acc,item,)=>{
     for(let i=0,j=1;i<arr1.length,j<arr1.length;i++,j++){
         const filt=arr.filter((item)=>{
             return item>arr1[i] && item<arr1[j]
         })
         acc[`${arr1[i]}-${arr1[j]}`]=filt.length;
     }

     return acc
 },{})
console.log(result)