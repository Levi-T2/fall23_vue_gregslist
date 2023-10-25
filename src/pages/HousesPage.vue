<template>
    <div class="component">
        <div class="container-fluid background">
            <section class="row">
                <div class="col-12 text-center fw-bold fs-1 p-4">
                    <p class="mb-0">Houses For Sale</p>
                    <button class="btn btn-outline-dark" type="button" title="Create House" data-bs-toggle="modal"
                        data-bs-target="#houseFormModal">
                        <i class="mdi mdi-plus"></i>
                    </button>
                </div>
            </section>
            <section class="row">
                <div v-for="house in houses" :key="house.id" class="col-12 col-md-3 g-3">
                    <HouseCardComponent :house="house" />
                </div>
            </section>
        </div>
    </div>

    <HouseForm />
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';
import HouseCardComponent from '../components/HouseCardComponent.vue';
import HouseForm from '../components/HouseForm.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseCardComponent, HouseForm }
};
</script>


<style lang="scss" scoped>
.background {
    background: lightcyan;
}
</style>