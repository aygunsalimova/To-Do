let inp = document.querySelector('input');
let btn = document.querySelector("button");
let ul = document.querySelector('ul');

btn.addEventListener('click', elaveEt);

document.addEventListener('DOMContentLoaded', localGetir)

ul.addEventListener('click', (e) => {
    // console.log(e.target);

    let element = e.target;

    if (element.className == "btn btn-danger btn-sm") {
        element.parentElement.classList.add('d-none');

        let text = element.parentElement.textContent;
        let gonder = text.substr(0, text.length - 3)
        localSil(gonder);

    }

})


function localSil(gonder) {
    let notlar;

    if (localStorage.getItem('notlar') === null) {
        notlar = [];
    } else {
        notlar = JSON.parse(localStorage.getItem('notlar'));
    }

    let ind = notlar.indexOf(gonder);



}

function elaveEt(e) {
    e.preventDefault();

    add(inp.value);
    localYaz(inp.value);

    inp.value = "";



}


function localYaz(not) {
    let notlar;

    if (localStorage.getItem('notlar') === null) {
        notlar = [];
    } else {
        notlar = JSON.parse(localStorage.getItem('notlar'));
    }

    notlar.push(not);

    localStorage.setItem('notlar', JSON.stringify(notlar));
}



function localGetir() {
    let notlar;

    if (localStorage.getItem('notlar') === null) {
        notlar = [];
    } else {
        notlar = JSON.parse(localStorage.getItem('notlar'));
    }

    notlar.forEach(item => {
        add(item)
    });

}


function add(not) {
    let yeniLi = document.createElement('li');
    yeniLi.classList.add('list-group-item');
    yeniLi.classList.add('d-flex');
    yeniLi.classList.add('justify-content-between');
    yeniLi.textContent = not;
    ul.appendChild(yeniLi);


    let newDiv = document.createElement('div');
    newDiv.classList.add('d-flex');
    newDiv.classList.add('justify=content-between');
    New.appendChild(newDiv);

    let yeniBtn = document.createElement("button");
    yeniBtn.classList.add('btn');
    yeniBtn.classList.add('btn-danger');
    yeniBtn.classList.add('btn-sm');
    yeniBtn.textContent = "Delete";
    newDiv.appendChild(yeniBtn);

    let New = document.querySelector('.New');
    let done = document.createElement('button');
    done.classList.add('btn');
    done.classList.add('btn-success');
    done.classList.add('btn-sm');
    done.textContent = "Done";
    newDiv.appendChild(done);



}