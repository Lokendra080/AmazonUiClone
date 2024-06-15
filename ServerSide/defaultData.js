const Products= require('./Models/ProductsSchema')

const productData = require('./CommonData/ProductsData')


const defaultData = async()=>{
    try{
        await Products.deleteMany({})
        const storeData= await Products.insertMany(productData)
        // console.log(storeData);
    }catch(error){
        console.log("Error"+ error.message)
    }
};

module.exports = defaultData;