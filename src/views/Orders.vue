<template>
    <div class="orders">
        <h1>Приходы / 25</h1>
        <order v-for="order in mockData.orders" :data="order"></order>
    </div>
</template>

<script>
    import mockData from '../MockData';
    import Order from "../components/Order";

    export default {
        name: "Orders",
        components: {Order},
        data() {
            return {
                mockData: mockData
            }
        }
    }
</script>

<style scoped lang="less">
    .orders {
        margin: 50px 100px;
    }
</style>
