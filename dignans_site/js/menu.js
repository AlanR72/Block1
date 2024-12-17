//Javascript for individual menu items

special_offer_display = document.getElementById('special_offer_popup'); // hidden as default
special_offer_click = document.getElementById('special_offer');//set variable for click event
closeButton = document.getElementById('close_button0');

special_offer_click.addEventListener('click',() =>{
    special_offer_display.classList.add('show')//triggers .show class in css to display menu
})
closeButton.addEventListener('click',() =>{
    special_offer_display.classList.remove('show')//closes .show class to hide menu again

})


partyA_display = document.getElementById('partyA_popup'); //as above
partyA_click = document.getElementById('partyA');
closeButton = document.getElementById('close_button');

partyA_click.addEventListener('click',() =>{
    partyA_display.classList.add('show')
})
closeButton.addEventListener('click',() =>{
    partyA_display.classList.remove('show')

})

partyB_display = document.getElementById('partyB_popup'); //as above
partyB_click = document.getElementById('partyB');
closeButton = document.getElementById('close_button1');


partyB_click.addEventListener('click',() =>{
    partyB_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    partyB_display.classList.remove('show')

})

lunchMenu_display = document.getElementById('lunchMenu_popup'); //as above
lunchMenu_click = document.getElementById('lunch_Menu');
closeButton = document.getElementById('close_button2');

lunchMenu_click.addEventListener('click',() =>{
    lunchMenu_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    lunchMenu_display.classList.remove('show')

})

dressing_display = document.getElementById('dressing_popup'); //as above
dressing_click = document.getElementById('dressing');
closeButton = document.getElementById('close_button3');

dressing_click.addEventListener('click',() =>{
    dressing_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    dressing_display.classList.remove('show')

})

officeCatering_display = document.getElementById('officeCatering_popup'); //as above
officeCatering_click = document.getElementById('office_Catering');
closeButton = document.getElementById('close_button4');

officeCatering_click.addEventListener('click',() =>{
    officeCatering_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    officeCatering_display.classList.remove('show')

})

everydayExtras_display = document.getElementById('everyday_extras_popup'); //as above
everydayExtras_click = document.getElementById('everyday_Extras');
closeButton = document.getElementById('close_button5');

everydayExtras_click.addEventListener('click',() =>{
    everydayExtras_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    everydayExtras_display.classList.remove('show')

})

execMenuA_display = document.getElementById('exec_menuA_popup'); //as above
execMenuA_click = document.getElementById('exec_MenuA');
closeButton = document.getElementById('close_button6');

execMenuA_click.addEventListener('click',() =>{
    execMenuA_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    execMenuA_display.classList.remove('show')

})

execMenuB_display = document.getElementById('exec_menuB_popup'); //as above
execMenuB_click = document.getElementById('exec_MenuB');
closeButton = document.getElementById('close_button7');

execMenuB_click.addEventListener('click',() =>{
    execMenuB_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    execMenuB_display.classList.remove('show')

})

execMenuC_display = document.getElementById('exec_menuC_popup'); //as above
execMenuC_click = document.getElementById('exec_MenuC');
closeButton = document.getElementById('close_button8');

execMenuC_click.addEventListener('click',() =>{
    execMenuC_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    execMenuC_display.classList.remove('show')

})

breakfast_display = document.getElementById('breakfast_popup'); //as above
breakfast_click = document.getElementById('breakfast');
closeButton = document.getElementById('close_button9');

breakfast_click.addEventListener('click',() =>{
    breakfast_display.classList.add('show')

})
closeButton.addEventListener('click',() =>{
    breakfast_display.classList.remove('show')

})

bbq_display = document.getElementById('bbq_popup'); //as above
bbq_click = document.getElementById('bbq');
closeButton = document.getElementById('close_button10');

bbq_click.addEventListener('click',() =>{
    bbq_display.classList.add('show')
    
})
closeButton.addEventListener('click',() =>{
    bbq_display.classList.remove('show')

})

//function linked to print button on menu pages

function enhancedPrint(){
    window.print();
}





