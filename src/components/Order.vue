<template>
    <div class="order">
        <div class="order-title"> {{ data.title }} </div>
        <div class="order-products-count"> {{ productCount }} </div>
        <div class="order-time"> {{ data.date }} </div>
        <div class="order-cost">
            <div v-for="valute in orderPrice" :class=" valute.isDefault ? 'default' : '' ">
                <span> {{ valute.value }} </span>
                <span> {{ valute.symbol }} </span>
            </div>
        </div>
    </div>
</template>

<script>
    const moment = require('moment');
    moment.locale('ru');

    class OrderPrice {
        constructor () {
            this.prices = [];
            return this;
        }

        setPrice (price) {
            if (!this.getPriceFromValute(price.symbol)) {
                this.prices.push(price);
            }
        }

        getDefaultPrice () {
            let retval = false;
            this.prices.map((price) => {
                if (price.isDefault) {
                    retval = price;
                }
            });

            return retval ? retval : this.prices[0];
        }

        getPriceFromValute (symbol) {
            let retval = false;

            this.prices.map((priceData) => {
                if (priceData.symbol === symbol) {
                    retval = priceData;
                }
            });

            return retval;
        }

        addPrice (value, symbol) {
            let obj = this.getPriceFromValute(symbol);
            if (obj) {
                obj.value += value;
            }
        }
    }

    export default {
        name: "Order",
        props: ['data'],
        computed: {
            productCount() {
                let count = 0;
                this.data.products.map((product) => {
                    if (product.order === this.data.id) {
                        count++;
                    }
                });

                return count;
            },
            orderPrice() {
                let orderPrice = new OrderPrice();
                let retval = [];

                this.data.products.map((product) => {
                    if (product.order === this.data.id) {
                        product.price.map((productPrice) => {
                            if (orderPrice.getPriceFromValute(productPrice.symbol)) {
                                orderPrice.addPrice(productPrice.value, productPrice.symbol)
                            } else {
                                orderPrice.setPrice(productPrice)
                            }
                        });
                    }
                });

                orderPrice.prices.map((price) => {
                    if (price.isDefault) {
                        retval.unshift(price);
                    } else {
                        retval.push(price);
                    }
                });

                return retval.length ? retval : [ { value: 0, isDefault: 1, symbol: '' } ];
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    .order {
        margin: 30px;
        width: ~'calc(100% - 30px)';
        display: grid;
        grid-template-columns: 6fr 2fr 2fr 2fr 1fr;
        padding: 10px 20px;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 5px;
        height: 70px;
        font-size: 20px;
        color: #546E7A;
    }
</style>
