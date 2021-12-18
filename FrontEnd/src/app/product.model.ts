import {Category} from './category.model';
export class Product
{
    public _id? : string
    public name : string;
    public description : string;
    public hdescription : string;
    public productImagePath : string;
    public price : number;
    public stock : number;
    public category :[Category]

    constructor(p_name:string,p_desc:string,p_hdesc:string,p_imagePath:string,p_price:number)
    {

        this.name = p_name;
        this.description = p_desc;
        this.hdescription = p_hdesc;
        this.productImagePath = p_imagePath;
        this.price = p_price;
       

    }
}