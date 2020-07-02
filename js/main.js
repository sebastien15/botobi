let chatOpener = document.querySelectorAll('.chatOpener')
let chatCloser = document.querySelectorAll('.chatCloser')
let chatBox    = document.querySelectorAll('.chatBox')
setTimeout(() => {
    chatBox[0].classList.toggle('hidden')
}, 2000);

chatOpener[0].addEventListener('click',()=>{
    chatBox[0].classList.toggle('hidden')
})
chatCloser[0].addEventListener('click',()=>{
    chatBox[0].classList.remove('hidden')
})