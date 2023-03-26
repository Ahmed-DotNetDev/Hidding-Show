let btnopen=document.getElementById('open');
let btnclose=document.getElementById('close');
let btncontent=document.getElementById('content');



btnclose.classList.add('hide');
btnclose.onclick=function(){
    btncontent.classList.add('hide');
    this.classList.add('hide');
    btnopen.classList.remove('hide');
}


btnopen.onclick=function(){
    this.classList.add('hide');
    btnclose.classList.remove('hide');
    btncontent.classList.remove('hide');
}
