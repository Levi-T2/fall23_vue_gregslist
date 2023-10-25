import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        // logger.log(res.data)
        const newHouses = res.data.map(pojo => new House(pojo))
        AppState.houses = newHouses
        logger.log(AppState.houses)
    }
    async getHouseById(houseId) {
        const res = await api.get(`api/houses/${houseId}`)
        logger.log(res.data)
        const newHouse = new House(res.data)
        AppState.activeHouse = newHouse
    }
    async createHouse(houseData) {
        const res = await api.post(`api/houses`, houseData)
        logger.log(res.data)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
    }
    clearHouseData() {
        AppState.activeHouse = null
    }
}

export const housesService = new HousesService()

