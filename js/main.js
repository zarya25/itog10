

let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


let form = document.forms.addNew;
let nameInput = form.elements.name;
let aboutInput = form.elements.about;

form.addEventListener('submit', addNew);

let flag = true;

function addNew(event) {

    event.preventDefault();

    nameError.innerHTML = '';
    aboutError.innerHTML = '';
    flag = true;

    if (nameInput.classList.contains('error__input')) {
        nameInput.classList.remove('error__input');
    }
    if (aboutInput.classList.contains('error__input')) {
        aboutInput.classList.remove('error__input');
    }

    if (!nameInput.value) {
        nameError.innerHTML = 'Введите название';
        nameInput.classList.add('error__input');
        flag = false;
    } else if (nameInput.value.length < 8) {
        nameError.innerHTML = 'Должно быть не менее 8 символов в названии';
        nameInput.classList.add('error__input');
        flag = false;
    }

    if (!aboutInput.value) {
        aboutError.innerHTML = 'Введите описание';
        aboutInput.classList.add('error__input');
        flag = false;
    } else if (aboutInput.value.length > 300) {
        aboutError.innerHTML = 'Должно быть не более 300 символов в тексте';
        aboutInput.classList.add('error__input');
        flag = false;
    }

    if (flag == true) {

        let name = nameInput.value || '';
        let about = aboutInput.value || '';
        const newNews = { name, about };
        news.push(newNews);

        nameInput.value = '';
        aboutInput.value = '';

        displayNews();
        modal.classList.remove('modal_active');
    }
}

let news = [
    { name: 'В казани дубак', about: 'Лето закончилось' },
    { name: 'В казани дубак', about: 'Привет заморозки' },
    { name: 'В казани дубак', about: 'Пока жара' }
];

function formatNews(newsItem) {
    return `<h3>${newsItem.name}</h3><p class="news-item__p">${newsItem.about}</p>`;
}

const output = document.querySelector('.news-wrapper');

function displayNews() {

    output.innerHTML = '';

    for (let i = 0; i < news.length; i++) {
        const formattedNews = formatNews(news[i]);

        if (formattedNews !== '') {
            const newDiv = document.createElement('div');
            newDiv.className = 'news-item';
            newDiv.innerHTML = formattedNews;
            output.appendChild(newDiv);
        }
    }
}

displayNews();

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'KeyW':
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
            break;
        case 'KeyB':
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
            break;
    }
});
