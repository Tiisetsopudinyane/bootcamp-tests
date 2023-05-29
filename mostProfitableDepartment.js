function mostProfitableDepartment(salesData){

   const salesMap={}
   for(let i=0;i<salesData.length;i++){
      const data=salesData[i];
      let currentDepartment=data.department;
      let currentSales=data.sales
      
      if(salesMap[currentDepartment]===undefined){
        salesMap[currentDepartment]=currentSales;
      }
     else{
        salesMap[currentDepartment]+=currentSales;     
     }
   }
  
    let maxSales=0;
    let maxDep="";
    for(const dep in salesMap){
      const sales =salesMap[dep];
      if(sales>maxSales){
        maxSales=sales;
        maxDep=dep;
      }
    }
  return maxDep
}
