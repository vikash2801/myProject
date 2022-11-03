function loadCoupon(){
    document.getElementById('Udemy_coupon').style.visibility= 'visible';
    document.getElementById('Udemy_body').style.opacity= '0.2';
}


function closeCoupon(){
    document.getElementById('Udemy_coupon').style.visibility= 'hidden';
    document.getElementById('Udemy_body').style.opacity= '1';
}

function changeTheme(){
    
    let UdemyLogo = document.getElementsByTagName('img');

    UdemyLogo[0].classList.toggle('dark-logo');

    let myBody = document.body;
    let myHeader = document.getElementsByTagName('header');
    let myPromo = document.getElementsByClassName('promoText');
    let myADText = document.getElementsByClassName('strong-font');
    let myCourseBrdr = document.getElementsByClassName('course-content');
    let myDiffCourse = document.getElementsByClassName('diffCourses');
    let myImpAds = document.getElementsByClassName('important-ads');
    let myCaption = document.getElementsByClassName('div-caption');
    let myTemp = document.getElementsByClassName('tail');
    let myGeo = document.getElementById('current_loc');

    /* font color toggle */
    let a = document.querySelectorAll('a');
    Array.from(a).forEach( (item)=>{
        item.classList.toggle('fontWhite');
    })

    let h = document.querySelectorAll('h1','h4');
    Array.from(h).forEach( (item)=>{
        item.classList.toggle('fontWhite');
    })

/*     for caption background */
Array.from(myCaption).forEach( (item)=>{
    item.classList.toggle('darkTheme');
})


    myBody.classList.toggle('darkTheme');

    myHeader[0].classList.toggle('whiteBoxShadow');

    myPromo[0].classList.toggle('darkTheme');
    myPromo[1].classList.toggle('darkTheme');

    /* myADText[1].classList.toggle('font-black'); */

    myCourseBrdr[0].classList.toggle('borderColor');

    myDiffCourse[0].classList.toggle('darkTheme');
    myDiffCourse[0].classList.toggle('whiteBoxShadow');

    myImpAds[0].classList.toggle('darkTheme');
    myImpAds[0].classList.toggle('whiteBoxShadow');
    
    myTemp[0].classList.toggle('darkTheme');
    myTemp[0].classList.toggle('borderColor');


    /* to change light-dark button */
    let isDark = document.getElementsByClassName('darkTheme');
    let pic;
    if(isDark.length != 0 ){
        pic = "images/brightness.png";
    }else{
        pic = "images/night-mode.png";
    }

    document.querySelector('#day-night').getElementsByTagName('img')[0].src = pic;

}

function getMyLocation(){
    let myButton = document.getElementsByClassName('myLocation')[0];
    let loc = document.getElementsByClassName('myLoc')[0];
    let locTemp = document.getElementsByClassName('myLocTemp')[0];

    
    if(navigator.geolocation){
        myButton.style.display = 'none';
        navigator.geolocation.getCurrentPosition(showLocation);
    }
    else{
        loc.innerText  = 'Geo not supported'
    }

    function showLocation(data){
        
                console.log(data)
                let lat = data.coords.latitude;
                let long = data.coords.longitude;
                
                const abc = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                //api calling
                fetch(abc, {method: 'GET'})
                // return promise
                .then((res) => res.json())
                // resolve promise
                .then((data) => {
                    console.log(data)
                    let cityName = data.city.name;
                    let temp = data.list[0].temp.day;

                    loc.innerText = `${cityName}`
                    locTemp.innerText = `${temp} °C`
                })
                .catch((err) => {
                    console.log(err)
                })

    }
}
