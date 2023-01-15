const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.ul');

//Добавляет задачу
btn.addEventListener('click', () => {
    if (input.value === '') return;
    const html =    `<li class="li">
                        <span class="span">${input.value}</span>
                        <div class="ok" data-action="done"></div>
                        <div class="delete" data-action="delete"></div>
                    </li>`; 
    ul.insertAdjacentHTML('beforeend', html) 
    input.value = '';
    input.focus();
});
// Добавляет задачу по нажатию enter
document.addEventListener('keyup', (event) =>{
    if (input.value === '') return;
    if (event.code === 'Enter'){
        const html =    `<li class="li">
                        <span class="span">${input.value}</span>
                        <div class="ok" data-action="done"></div>
                        <div class="delete" data-action="delete"></div>
                    </li>`; 
    ul.insertAdjacentHTML('beforeend', html)  
    input.value = '';
    input.focus();
    };
});

//удаляем задачу
ul.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'delete'){
       const li = event.target.closest('.li');
       li.remove();
    };
});
// Задача выполненна
ul.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'done') {
        const li = event.target.closest('.li');
        const span = li.querySelector('.span');
        li.classList.toggle('liDone')
        span.classList.toggle('spanDone')
    };
});
