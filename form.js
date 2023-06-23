const button=document.getElementById('login-btn');
const username=document.getElementById('user');
const password=document.getElementById('pass');
const form=document.getElementById('login');
button.addEventListener('click',()=>{
    console.log('click');
})
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('submit',username.value,password.value);
})