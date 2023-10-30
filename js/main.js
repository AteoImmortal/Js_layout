/* Задача 1 */
const html = document.querySelector('html');
html.setAttribute('lang', 'en');

const meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

const title = document.createElement('title');
title.textContent = 'Домашняя работа';
document.head.appendChild(title);

const style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        text-align: center;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url('../fonts/OpenSans-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Arvo';
        src: url('../fonts/Arvo.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url('../fonts/Montserrat-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    .h1__title {
        margin-top: 122px;
        margin-bottom: 10px;
        font-family: Arvo;
        font-size: 36px;
        font-weight: 400;
        line-height: 48px;
        color: #212121;
    }
    .text-header {
        margin-bottom: 55px;
        text-align: center;
        font-family: OpenSans;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }
    .row-blocks{
        display: flex;
        justify-content: center;
    }
    .block {
        width: 401px;
        padding: 80px 96px 93px 95px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
    }
    .block__right {
        background-color: #8F75BE;
    }
    .block__right .block__name{
        color: #FFC80A;
    }
    
    .block__right .block__btn,
    .block__right p,
    .block__right .block__title{
        color: #fff;
    }
    .block__left {
        background-color: #fff;
    }
    .block__name, .block__info {
        font-family: 'Open Sans';
        text-align: center;
        color: #9FA3A7;
    }
    .block__name {
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2.4px;
        color: #9FA3A7;
    }
    .block__info {
        font-size: 12px;
        line-height: 22px;
        width: 210px;
        margin-bottom: 65px;
    }
    .block__title {
        margin-top: 19px;
        margin-bottom: 25px;
        width: 210px;
        font-family: Arvo;
        font-size: 36px;
        font-weight: 400;
        line-height: 46px;
        color: #212121;
    }
    .block__btn{
        padding: 16px 23px;
        font-family: 'Montserrat';
        letter-spacing: 2px;
        font-size: 12px;
        text-transform: uppercase;
        cursor: pointer;
        outline: none;
        border-radius: 35px;
        border: 3px solid #FFC80A;
        background: transparent;
        color: #212121;
    }
    
`;
document.head.appendChild(style);

const body = document.querySelector('body');

const app = document.createElement('div');
app.classList.add('app');
body.appendChild(app);

const h1 = document.createElement('h1');
h1.classList.add('h1__title');

h1.textContent = 'Choose Your Option';
app.appendChild(h1);

const textHeader = document.createElement('p');
textHeader.classList.add('text-header')
textHeader.textContent = 'But I must explain to you how all this mistaken idea of denouncing';
app.appendChild(textHeader);


const divRow = document.createElement('div');
divRow.classList.add('row-blocks');
app.appendChild(divRow);

const divLeft = document.createElement('div');
const divRight = document.createElement('div');
divLeft.classList.add('block', 'block__left');
divRight.classList.add('block', 'block__right');

divLeft.innerHTML = `
    <span class="block__name">freelancer</span>
    <h2 class="block__title">Initially designed to </h2>
    <p class="block__info">But I must explain to you how all this mistaken idea of denouncing </p>
    <button class="block__btn">start here</button>
`;
divRight.innerHTML = `
    <span class="block__name">studio</span>
    <h2 class="block__title">Initially designed to </h2>
    <p class="block__info">But I must explain to you how all this mistaken idea of denouncing </p>
    <button class="block__btn">start here</button>
`

divRow.appendChild(divLeft);
divRow.appendChild(divRight);

