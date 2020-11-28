<template>
    <div class="card">
        <div class="card__info">
            <a :href="`${card.link}`" class="card__link" target="_blank">{{card.name}}</a>
        </div>
        <div class="card__img" :style="{backgroundImage: `url(${publicPath}${card.img})`}"></div>
    </div>
</template>

<script>
export default {
    props: {
        card: Object,
    },
    data () {
    return {
        publicPath: process.env.BASE_URL
    }
}
}
</script>

<style>
    .card {
        width: 25%;
        min-width: 250px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        height: 250px;
        color: #272727;
    }

    .card__info {
        height: 15%;
        padding: 10px 10px 5px;
        border: 1px solid rgba(225, 225, 225, 0.5);
        border-radius: 5px 5px 0 0;
        text-align: center;
    }

    .card__link {
        text-decoration: none;
        color: #272727;
        font-weight: 500;
    }

    .card__link:hover {
        color: #D98C5F;
        text-decoration: underline;
    }

    .card__img {
        width: 100%;
        height: 78%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 0 0 5px 5px;
    }
</style>