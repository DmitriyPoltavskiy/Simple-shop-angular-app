export class Shop {
    name:string;
    price:string;
    imageUrl:string;
    isEdit:boolean;

    constructor(name:string, price:string, imageUrl:string, isEdit:boolean = false) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.isEdit = isEdit;
    }
}