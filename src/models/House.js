
export class House {
    constructor(data) {
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.levels = data.levels
        this.price = data.price
        this.year = data.year
        this.id = data.id
        this.description = data.description
        this.creatorId = data.creatorId
        this.imgUrl = data.imgUrl || "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/9/c/1/9c10b4591a3bdfb2b28404a136722f9df897338c.gif"
    }
}