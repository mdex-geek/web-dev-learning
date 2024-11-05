let currentClock ;

function searchBackend (){
    console.log("request sent to backend")
}

function bebounce(){
    clearTimeout(currentClock);
    currentClock = setTimeout(searchBackend, 30);
}

bebounce();
bebounce();
bebounce();
bebounce();
bebounce();
bebounce();
bebounce();
bebounce();
bebounce();
