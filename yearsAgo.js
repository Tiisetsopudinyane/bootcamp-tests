function yearsAgo(year){
    const myYears=new Date(year);
    const thisYear=new Date().getFullYear();
    return (thisYear-myYears);
  
  }