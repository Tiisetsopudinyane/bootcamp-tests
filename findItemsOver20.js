function findItemsOver20(itemList){
  const itemObj=[];
  for(let i=0;i<itemList.length;i++){
    if(itemList[i]["qty"]>20){
         itemObj.push(itemList[i]);
    }
  }
   return itemObj;
 
 }
