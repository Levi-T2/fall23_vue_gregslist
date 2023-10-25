<template>
    <div class="modal fade" id="houseFormModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createHouse()">
                        <div class="m-2 p-1">
                            <label for="year" class="form-label">Year</label>
                            <input v-model="editable.year" id="year" type="number" required min="1000" max="2025"
                                name="year" class="form-control">
                        </div>
                        <div class="m-2 p-1">
                            <label for="bedrooms" class="form-label">Bedrooms</label>
                            <input v-model="editable.bedrooms" id="bedrooms" type="number" required min="0" max="100"
                                name="bedrooms" class="form-control">
                        </div>
                        <div class="m-2 p-1">
                            <label for="bathrooms" class="form-label">Bathrooms</label>
                            <input v-model="editable.bathrooms" id="bathrooms" type="number" required min="0" max="100"
                                name="bathrooms" class="form-control">
                        </div>
                        <div class="m-2 p-1">
                            <label for="price" class="form-label">Price</label>
                            <input v-model="editable.price" id="price" type="number" required min="1" max="10000000"
                                name="price" class="form-control">
                        </div>
                        <div class="m-2 p-1">
                            <label for="levels" class="form-label">Levels</label>
                            <input v-model="editable.levels" id="levels" type="number" required min="1" max="10000000"
                                name="levels" class="form-control">
                        </div>
                        <div class="m-2 p-1">
                            <label for="description">Description</label>
                            <textarea v-model="editable.description" id="description" type="text" required rows='5'
                                minlength="3" maxlength="700" name="description" class="form-control"></textarea>
                        </div>
                        <div class="m-2 p-1">
                            <label for="imgUrl" class="form-label">Img Url</label>
                            <input v-model="editable.imgUrl" id="imgUrl" type="text" required minlength="4" maxlength="700"
                                name="imgUrl" class="form-control">
                        </div>
                        <div class="p-3">
                            <button class="btn btn-success" type="submit">Submit House</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';



export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            async createHouse() {
                try {
                    const houseData = editable.value
                    await housesService.createHouse(houseData)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>