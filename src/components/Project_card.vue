<template>
    <div class="card" @mouseover="upHere = true" @mouseleave="upHere = false">
        <div class="card__info">
            <div class="github-wrapper" v-show="upHere">
                <img src="@/assets/github.png" class="github-img">
                <img src="@/assets/arrow.png" class="arrow-img">
            </div>
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
            publicPath: process.env.BASE_URL,
            upHere: false
        }
    },
}
</script>

<style>
    .card {
        width: 45%;
        min-width: 420px;
        border-radius: 5px;
        height: 450px;
        color: #272727;
        border: 1px solid rgb(225, 225, 225);
    }

    .card:hover {
        transition: 0.2s;
        box-shadow: 0 10px 5px rgba(0, 0, 0, 0.5);
    }

    .card__info {
        height: 15%;
        padding: 10px 10px 5px;
        border-radius: 5px 5px 0 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes github {
        from {
            left: -60px;
        }
        to {
            left: -40px;
        }
    }

    .github-wrapper {
        display: flex;
        align-items: center;
        position: absolute;
        left: -40px;
        top: 25px;
        animation: github .5s infinite alternate;
        background-color: white;
    }

    .card__link {
        text-decoration: none;
        color: #272727;
        font-weight: 500;
        font-size: 20px;
    }

    .card__link:hover {
        color: #D98C5F;
        text-decoration: underline;
    }

    .card__img {
        width: 100%;
        height: 81.7%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 0 0 5px 5px;
    }

    .github-img {
        height: 40px;
        width: 40px;
    }

    .arrow-img {
        height: 20px;
        width: 20px;
    }
</style>