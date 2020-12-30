<template>
    <div class="projects">
        <div class="title-wrapper">
        <h1 class="projects__title">
        Проекты
        </h1>
        </div>
        <div class="projects-list">
        <Card 
            v-for="card of projects" :key="card.link"
            :card="card"
        />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Project_card'
export default {
    components: {
        Card,
    },
    data() {
        return {
            projects: [
                {name: 'Верстка лэндинга Ozon New Skills', link: 'https://github.com/alexandrYun/ONS_landing', img: 'ons_landing.png'},
                {name: 'Верстка Travel сайта', link: 'https://github.com/alexandrYun/travel_project', img: 'travel.png'},
                {name: 'JavaScript будильник', link: 'https://github.com/alexandrYun/alarm_clock_project', img: 'alarm_clock.png'},
                {name: 'JavaScript погода', link: 'https://github.com/alexandrYun/weather', img: 'weather.png'},
                {name: 'Vue.js Todo', link: 'https://github.com/alexandrYun/vue_todo', img: 'vue_todo.png'}
            ]
        }       
    }
}
</script>

<style>
    .projects {
    padding-top: 25px;
    padding-bottom: 25px;
    font-family: 'Montserrat Alternates', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .title-wrapper {
        text-align: center;
    }

    .projects__title {
        color: #272727;
    }

    .projects-list {
        margin-top: 20px;
        width: 75%;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>