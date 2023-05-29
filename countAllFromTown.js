function countAllFromTown(str,reg){
    const newArrayList=str.split(",");
     let count=0;
     const clean=[]
     for(let i=0;i<newArrayList.length;i++){
       clean.push(newArrayList[i].trim())
       if(clean[i].includes(reg)){
          count++;
          }
     }
     return count;
   }