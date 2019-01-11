<template>
    <div class="top-menu">
        <div class="time">
            <span class="day">{{ day }}</span>
            <span class="data">{{ data }}</span>
            <span class="clock">{{ clock }}</span>
        </div>
    </div>
</template>

<script>
    const moment = require('moment');
    moment.locale('ru');

    export default {
        name: "TopMenu",
        computed: {},
        methods: {
            getDay() {
                return moment().format('dddd');
            },
            getData() {
                let d = moment().format('d'),
                    m = moment().format('MMM').slice(0, -1),
                    y = moment().format('YYYY');
                return `${d} ${m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()}, ${y}`;
            },
            getClock() {
                return moment().format('hh:mm');
            },
            recountData() {
                this.day = this.getDay();
                this.data = this.getData();
                this.clock = this.getClock();

                setTimeout(() => {
                    this.recountData();
                }, 1000);
            }
        },
        data() {
            this.recountData();
            return {
                day: this.getDay(),
                data: this.getData(),
                clock: this.getClock()
            }
        }
    }
</script>

<style scoped lang="less">
    * {
        font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
        font-size: 18px;
        font-weight: 500;
    }

    .top-menu {
        grid-area: ~"1 / 1 / 2 / 3";
        background: white;
        box-shadow: 0 0 30px 1px black;
        z-index: 1;

        display: grid;
        grid-template-rows: 1fr 2fr 2fr 1fr;
        grid-template-columns: 6fr 1fr 1fr 1fr;
    }

    .time {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-area: ~"2 / 2 / 4 / 4";

        min-width: 250px;

        span {
            margin: auto 0;
            position: relative;
        }

        .day {
            grid-area: ~"1 / 1 / 2 / 2";

            &::first-letter {
                text-transform: uppercase;
            }
        }
        .data {
            grid-area: ~"2 / 1 / 3 / 2";
        }
        .clock {
            grid-area: ~"2 / 2 / 3 / 3";

            &::before {
                content: '🕗';
                position: absolute;
                left: -25px;
                line-height: 0;
                margin-top: 9px;
                filter: hue-rotate(30deg * 3);
            }
        }
    }
</style>
