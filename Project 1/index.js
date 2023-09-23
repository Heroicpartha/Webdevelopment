const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apikey = "4x/8VUXqDxIVrP564AWsuA==Wy4Gvs34IwugRKjv"

const options = {
    method : "GET",
    headers:{
        "X-Api-Key":apikey,

    }
};


const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getJoke(){

    jokeEl.innerText="Hold on to your seat.......";
    btnEl.disabled =true;
    btnEl.innerText="Loading....";
    const response = await fetch(apiURL,options)
    const data=  await response.json()

    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke";
    

    jokeEl.innerText=data[0].joke;
}

btnEl.addEventListener("click",getJoke)
