export default {
    name : 'product',
    type : "document",
    title : "Product",
    fields : [{
        name : "name",
        type : "string",
        title : "Name"
    }, {
        name : "price",
        type : "number",
        title : "Price"
    }, {
        name : "images",
        type : "array",
        title : "Images",
        of : [{
            type : "image"
           }]  
},{
    name : "stockQuantity",
    type : 'number',
    title : "Stock Quantity"
},
{
    name : "description",
    type : "text",
    title : "Description"
}
]}