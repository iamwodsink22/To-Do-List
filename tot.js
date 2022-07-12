const arr1=[17,21,53];
// printforecast=(arr){
console.log(`${arr1[0]} degree....${arr1[1]} degree....${arr1[2]} degree`)
printforecast=(arr)=>{
for(let i=0;i<arr.length;i++){
    str=''
    str+= `${arr1[i]} in ${i+1} day`
    console.log(str);
}
}
printforecast(arr1)