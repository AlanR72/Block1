function Nav(){
    let mobileClick = document.getElementById('mobile-click');
    let mobileNav = document.querySelector('#mobile-nav');

    mobileClick.addEventListener('click',() =>{
        mobileNav.classList.toggle('active');
    });
}
Nav()