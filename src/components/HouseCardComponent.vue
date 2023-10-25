<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
        <div class="house-card">
            <img :src="house.imgUrl" class="img-fluid rounded mb-3">
            <div>
                <p>Bedrooms: {{ house.bedrooms }}</p>
                <p>Bathrooms: {{ house.bathrooms }}</p>
                <p>Price: ${{ house.price }}</p>
            </div>
        </div>
    </router-link>
</template>


<script>
import { House } from '../models/House';

export default {

    props: {
        house: { type: House, required: true }
    },

    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.house-card {
    background-color: rgb(230, 234, 229);
    font-weight: bold;
    border-radius: 5px;
    border: 6px ridge rgb(18, 87, 53);
    padding: 1rem;
    box-shadow: 0px -1px 20px 5px #5B5B5B;
    height: 50dvh;
    color: black;
    overflow: scroll;
}
</style>