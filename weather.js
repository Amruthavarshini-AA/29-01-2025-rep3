
async function Sample(){
   
    let raw=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5c3c18970ebedfd154c98b39cdbdf2f9");
    let data=await raw.json();
    if(data){
        let {timezone,id,name,cod,main:{temp,temp_min,humidity},weather}=data;
        console.log("Timezone:",timezone);
        console.log("ID:",id);
        console.log("Name:",name);
        console.log("Cod:",cod);
        console.log("Temperature:",temp);
        console.log("Minimum Temperature:",temp_min);
        console.log("Humidity:",humidity);
        if(Array.isArray(weather))
        { 
            weather.forEach((condition)=>{
                console.log("Weather description:",condition.description);
            })
        }
    }
    else{
        console.error("Error in data");
    }
    
}
Sample()
