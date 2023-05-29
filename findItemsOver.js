
function findItemsOver(itemList,number){
  const itemObj=[];
 for(let i=0;i<itemList.length;i++){
   if(itemList[i]["qty"]>number){
      itemObj.push(itemList[i]);
   }
 }
  return itemObj;

}