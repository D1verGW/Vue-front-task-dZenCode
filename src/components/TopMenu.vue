<template>
    <div class="top-menu">
        <div class="time">
            <span class="day">{{ time.day }}</span>
            <span class="data">{{ time.data }}</span>
            <span class="clock">{{ time.clock }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopMenu",
        computed: {
            time() {
                return {
                    day: 'Вторник',
                    data: '12 марта, 2017',
                    clock: '17.20'
                };
            }
        }
    }
</script>

<style scoped lang="less">
    .top-menu {
        grid-area: ~"1 / 1 / 2 / 3";
        background: white;
        box-shadow: 0 0 30px 1px black;
        z-index: 1;
    }
</style>
