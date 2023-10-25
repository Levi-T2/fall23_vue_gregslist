<template>
    <div class="container-fluid">
        <section v-if="house" class="row">
            <div class="col-12 d-flex p-5 align-items-center justify-content-evenly">
                <img :src="house.imgUrl">
                <div class="fw-bold fs-5">
                    <p>Bedrooms: {{ house.bedrooms }}</p>
                    <p>Bathrooms: {{ house.bathrooms }}</p>
                    <p>Description: {{ house.description }}</p>
                    <p>Price: ${{ house.price }}</p>
                    <p>Year: {{ house.year }}</p>
                    <p>Levels: {{ house.levels }}</p>
                    <p>Created At: {{ house.createdAt.toLocaleDateString() }}</p>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';


export default {
    setup() {
        const route = useRoute();
        // const router = useRouter();
        async function getHouseById() {
            try {
                const houseId = route.params.houseId
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            housesService.clearHouseData()
            getHouseById()
        })
        return {
            house: computed(() => AppState.activeHouse)
        }
    }
};
</script>


<style lang="scss" scoped>
img {
    height: 50dvh;
    border-radius: 4px;
    border: 5px outset rgb(189, 152, 97);
}
</style>