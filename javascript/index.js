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