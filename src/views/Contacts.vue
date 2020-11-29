<template>
    <div class="contacts">
        <h1 class="contacts__title">
            Контакты
        </h1>
        <div class="contacts-links">
            <p class="contacts__email">
                email: alexandryun@mail.ru
            </p>
            <a href="https://t.me/alexandryun" target="_blanc" class="contacts__link">
                Telegram: @alexandryun
            </a>
            <a href="https://github.com/alexandrYun" target="_blanc" class="contacts__link">
                GitHub: alexandrYun
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts'
}
</script>

<style>
    .contacts {
        font-family: 'Montserrat Alternates', sans-serif;
        color: #272727;
        width: 50%;
        margin: 20px auto;   
    }

    .contacts__title {
        display: inline-block;
        border-bottom: 1px solid rgba(39, 39, 39, 0.3);
    }

    .contacts__email {
        font-size: 25px;
    }

    .contacts__link {
        color: #272727;
        font-size: 25px;   
    }

    .contacts__link:hover {
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    }

    .contacts-links {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: 1px solid rgba(39, 39, 39, 0.3);
        padding: 10px;
        width: fit-content;
    }
</style>