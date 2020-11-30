let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate")
let iconfile;
window.addEventListener("load",()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        console.log(navigator.geolocation)
        navigator.geolocation.getCurrentPosition((position)=>{
            long= position.coords.longitude;
            lat= position.coords.latitude;
            console.log(long,lat)
            const proxy= "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=81be5d56d149d7579f2e2558c7978b99`;
            fetch(api)
                .then((Response)=>{
                    return Response.json()
                })
                .then(data =>{
                    const{name}=data;
                    const {feels_like}=data.main;
                    const {id, main}=data.weather[0];
                    loc.textContent = name;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like-273);
                    if (id < 250){
                        tempicon.src = 'http://openweathermap.org/img/wn/11d@2x.png'
                    }
                    else if (id < 350){
                        tempicon.src = 'http://openweathermap.org/img/wn/11d@2x.png'
                    }
                    else if (id < 550){
                        tempicon.src = 'http://openweathermap.org/img/wn/10d@2x.png'
                    }
                    else if (id < 650){
                        tempicon.src = 'http://openweathermap.org/img/wn/13d@2x.png'
                    }
                    else if (id < 800){
                        tempicon.src = 'http://openweathermap.org/img/wn/50d@2x.png'
                    }
                    else if (id === 800){
                        tempicon.src = 'http://openweathermap.org/img/wn/01d@2x.png'
                    }
                    else if (id > 800){
                        tempicon.src = 'http://openweathermap.org/img/wn/04d@2x.png'
                    }
                    console.log(data);
                })
        })
    }
})