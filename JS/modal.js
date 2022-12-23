const modal = document.querySelector('.modal_container');
const modal2 = document.querySelector('.modal2_container');
const lastModal = document.querySelector('.last_modal_container');
const openModal = document.querySelector('.circleIconButton-1VxDrg');
const closeModal = document.querySelector('.modal_close_icon');
const closeModal2 = document.querySelector('.modal2_close_icon');
const lastCloseModal = document.querySelector('.last_modal_close_icon');
const modal2Back = document.querySelector('.modal2_back_btn');
const lastModalBack = document.querySelector('.last_modal_back_btn');
const nextModal = document.querySelector('.modal_templet');
const nextModal2 = document.querySelector('.modal2_templet');

const form = document.querySelector('.modal_form');
const forminput = document.querySelector('.modal_form_input');
const createBtn = document.querySelector('.modal_create_btn')

const changeName= document.querySelector('.change_name')
console.log(forminput.value);


openModal.addEventListener('click', ()=>
{
    modal.style.display ="block";
})

closeModal.addEventListener('click', ()=>
{
    modal.style.display="none";
})


nextModal.addEventListener('click',()=>{
    modal.style.display="none";
    modal2.style.display="block";
})
closeModal2.addEventListener('click', ()=>
{
    modal2.style.display="none";
})
modal2Back.addEventListener('click', ()=>{
    modal2.style.display="none";
    modal.style.display="block";
})



nextModal2.addEventListener('click',()=>{
    modal2.style.display="none"
    lastModal.style.display="block";
})
lastCloseModal.addEventListener('click', ()=>
{
    lastModal.style.display="none"
})
lastModalBack.addEventListener('click', ()=>{
        lastModal.style.display="none"
        modal2.style.display="block";
})



form.addEventListener("submit",(event)=>{
    console.log(event);
    event.preventDefault();
   return (location.href = "empty.html");
});
