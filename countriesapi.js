var request = new XMLHttpRequest();
request.open('get',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    console.log(data);
   
    let asianCountries = data.filter(country => {
        return country.region === 'Asia';
    })
    console.log(asianCountries);
      
    let populations = data.filter(country => {
        return country.population <= '200000';
    })
    console.log(populations);
   
    let dollarcountry = data.filter(country => {
        return country.currencies[0].symbol === '$';

    })

    
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    console.log(dollarcountry);
    
      data.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })
    

}