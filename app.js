const ClosedFace = document.querySelector('.closed');
const OpenFace = document.querySelector('.open');

ClosedFace.addEventListener('click', ()=>{
    if(OpenFace.classList.contains('open')){
        OpenFace.classList.add('active');
        ClosedFace.classList.remove('active');
    }
})
OpenFace.addEventListener('click', ()=>{
    if(ClosedFace.classList.contains('closed')){
        ClosedFace.classList.add('active');
        OpenFace.classList.remove('active');
    }
})