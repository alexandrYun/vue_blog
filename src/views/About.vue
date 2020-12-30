<template>
    <div class="about">
        <h1 class="about__title">
            Обо мне и проекте
        </h1>
        <div class="about__text-wrapper">
        <p class="about__text">
            Привет, меня зовут Александр и я начинающий frontend разработчик.
            Я пишу на JS и Vue.js, примеры моих проектов можно найти на <router-link to="/" class="home-link">Главной</router-link>.
            Одним из них является страница, на которой ты сейчас находишься).</p> <p class="about__text">Данный прект создан, как портфолио по моим работам, которые я делал на протяжении курса Ozon New Skills по Frontend-разработке. Он написан на Vue.js с использованием роутинга.</p>
            <p class="about__text">Вижу себя в данной профессии и по максимуму уделяю время на совершенствование своих навыков и получение новых знаний и связываю свою дальнейшую профессиональную деятельность именно с разработкой.
        </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
    .about {
        /* text-align: center; */
        font-family: 'Montserrat Alternates', sans-serif;
        width: 50%;
        margin: 20px auto;
        color: #272727;
    }

    .about__title {
        border-bottom: 1px solid rgba(39, 39, 39, 0.3);
        display: inline-block;
    }

    .about__text-wrapper {
        margin-top: 20px;
        line-height: 25px;
        letter-spacing: 1px;
        border: 1px solid rgba(39, 39, 39, 0.3);
        padding: 0 10px;
        font-size: 18px;
    }

    .about__text {
        margin: 10px 0;
    }

    .home-link {
        color: #272727;
    }

    .home-link:hover {
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    }
</style>