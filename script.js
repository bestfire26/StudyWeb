function Color_Change(){
    var target = document.querySelector('body');
    var target2 = document.querySelector('#button_values');
    // var a_list = document.querySelectorAll('a');
    if(target.dataset.mode === 'night'){
        // target.style.backgroundColor ='white';
        // target.style.color ='black';
        target.dataset.mode = 'day';
        target2.value = 'night';
        // for(var i=0;i<a_list.length;i++){
        // a_list[i].style.color ='blue';
        // a_count = 0;
        // }
        $('body').css({'background-color':'white', 'color':'black'})
        $('a').css('color','blue');
    } else {
        // target.style.backgroundColor ='black';
        // target.style.color ='white';
        target.dataset.mode = 'night';
        target2.value = 'day';
        // for(var i=0;i<a_list.length;i++){
        // a_list[i].style.color ='powderblue';
        // a_count = 1;
        // }
        $('body').css({'background-color':'black', 'color':'white'})
        $('a').css('color','powderblue');
    }
}