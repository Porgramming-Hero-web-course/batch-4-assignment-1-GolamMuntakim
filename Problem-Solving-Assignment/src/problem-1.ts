function sumArray(num:number[]):number{
  return  num.reduce((acc,cur)=>{
     return   acc+cur;
    },0)
}
