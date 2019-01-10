<template>
    <div class="app">
        <top-menu/>
        <navigation-menu/>
        <router-view/>
    </div>
</template>

<script>
    import NavigationMenu from "./components/NavigationMenu";
    import TopMenu from "./components/TopMenu";
    export default {
        name: "app",
        components: {TopMenu, NavigationMenu}
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        border: none;
    }

    .app {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-rows: 1fr 9fr;
        grid-template-columns: 1fr 9fr;
    }
</style>
