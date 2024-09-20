<script setup>
    import { ref } from 'vue';

    const navbarItems = [
        {
            text: 'Bodies',
            link: '/bodies'
        },
        {
            text: 'Flowers',
            link: '/flowers'
        },
        {
            text: 'Design etc.',
            link: '/designs'
        },
        {
            text: 'About',
            link: '/about'
        }
    ]

    const expanded = ref(false);

</script>

<template>
    <nav class="nav-bar">
        <nav class="nav-container">
            <button class="expand-btn" @click="() => {expanded = !expanded}">{{ expanded ? 'Close' : 'Menu' }} </button>
            <router-link class="nav-brand" style="font-weight: bold;" to="/">
                MATT PAGETT
            </router-link>
            <nav class="nav-main" :class="{expanded: expanded}">
                <router-link class="nav-item" v-for="item in navbarItems" :to="item.link" @click="() => { expanded=false }">
                    {{ item.text }}
                </router-link>
            </nav>
        </nav>
    </nav>
</template>

<style scoped>
    .nav-bar {
        background-color: white;
        height: calc(1lh + 40px);
        overflow: visible;
        z-index: 10;
        font-size: larger;
    }

    .nav-container {
        margin: 0 auto;
        padding: 20px 12px;
        border-width: 0px 12px;
        border-style: solid;
        border-color: transparent;
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
        transition: height 1s ease;
        background-color: white;
    }

    .nav-brand {
        flex-grow: 1;
    }

    .nav-main {
        max-height: 100vh;
        flex-grow: 4;
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
    }

    .expand-btn {
        position: absolute;
        right: 24px;
        border: none;
        background: none;
        display: none;
        padding: 0;
    }

    @media screen and (max-width: 575px){
        .nav-container {
            display: block;
        }

        .nav-main {
            display: block;
            overflow: hidden;
            max-height: 0px;
            transition: max-height 0.5s ease;
        }

        .nav-main.expanded {
            max-height: calc(v-bind("navbarItems.length") * (1lh + 12px));
        }

        .nav-item {
            margin-top: 12px;
            display:block;
        }

        .expand-btn {
            display: inline;
        }
    }
</style>