import axios from "axios"
const url="http://localhost:3001/products";
const url1="http://localhost:3002/login";

class ProductService{
    getProducts(){
        return axios.get(url);
    }
    addProducts(product){
        return axios.put(url,product);
    }
    updateProduct(id,product){
        return axios.post(url+"/"+id,product);
    }
    deleteProduct(id){
        return axios.delete(url+"/"+id);
    }
    getProductById(id){
        return axios.get(url+"/"+id);
    }
    getUsers(){
        return axios.get(url1);
    }
}
export default new ProductService();