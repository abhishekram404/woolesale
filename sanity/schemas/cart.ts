export default {
    name : 'cart',
    type : 'document',
    title : "Cart",
    fields : [{
        name : "owner",
        type : "string",
        title : "Owner"
    },{
        name: "cartItems",
        type : 'array',
        title : "Cart Items",
        of : [{
            type : "object",
            fields : [{
                name : 'quantity',
                type : "number",
                title : "Quantity"
            }, {
            type : "reference",
            name : "product",
            weak : true,
            to : [{
                type : 'product'
            }]
        }]
        }]
    }]
}