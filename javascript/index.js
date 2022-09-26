function loadCoupon(){
    document.getElementById('Udemy_coupon').style.visibility= 'visible';
    document.getElementById('Udemy_body').style.opacity= '0.2';
}


function closeCoupon(){
    document.getElementById('Udemy_coupon').style.visibility= 'hidden';
    document.getElementById('Udemy_body').style.opacity= '1';
}

function changeTheme(){
    
    let myBody = document.body;
    let myHeader = document.getElementsByTagName('header');
    let myPromo = document.getElementsByClassName('promoText');


    myBody.classList.toggle('darkTheme');
    myHeader[0].classList.toggle('whiteBoxShadow');
    myPromo[0].classList.toggle('fontWhite');
    myPromo[1].classList.toggle('fontWhite');

}