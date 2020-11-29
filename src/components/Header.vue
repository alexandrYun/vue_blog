<template>
    <header class="header">
        <div class="logo-wrapper">
        <h1 class="header__logo">alexandrYun.blog</h1>
        </div>
        <nav class="nav">
            <router-link to="/" class="nav__link">Home</router-link>
            <router-link to="/about" class="nav__link">About</router-link>
            <router-link to="/contacts" class="nav__link">Contacts</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
    .header {
        height: 80px;
        background-color: #272727;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    .logo-wrapper {
        height: 80%;
        border-right: 1px solid rgba(225, 225, 225, 0.5);
        border-image: linear-gradient(to bottom,#272727, rgba(225, 225, 225, 0.5) 50%,#272727);
        border-image-slice: 1;
        display: flex;
        align-items: center;
        padding-right: 15px;
    }

    .header__logo {
        color: white;
        font-weight: 400;
        font-size: 28px;
    }

    .nav {
        display: flex;
        gap: 15px;
        margin-left: 50px;
    }

    .nav__link {
        color: white;
        text-decoration: none;
    }

    .nav__link:hover {
        text-decoration: underline;
    }
</style>