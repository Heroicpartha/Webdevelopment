let namasteBtn= document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name = prompt('Enter name of student')
    namasteBtn.textContent = 'Roll no .1:' + name;
}

