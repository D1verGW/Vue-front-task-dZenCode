<template>
    <div class="navigation-menu">
        <div class="links">
            <router-link to="/Orders">Приход</router-link>
            <router-link to="/Products">Продукты</router-link>
        </div>
    </div>
</template>

<script>
    import TopMenu from "./TopMenu";
    export default {
        name: "NavigationMenu",
        components: {TopMenu}
    }
</script>

<style scoped lang="less">
    .navigation-menu {
        grid-area: ~"2 / 1 / 3 / 2";
        background: #F0F3F5;
        box-shadow: 0 0 30px 1px black;
        display: flex;
        flex-direction: column;
        width: 200px;
    }

    .links {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;

        a {
            padding-top: 5px;
            padding-bottom: 5px;
            text-transform: uppercase;
            color: black;
            font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
            font-size: 20px;
            font-weight: 600;
            text-decoration: none;
            height: 35px;
            box-sizing: border-box;
            width: 60%;
            text-align: center;
        }
    }

    .router-link-exact-active {
        border-bottom: 5px #8BC34A solid;
    }
</style>
