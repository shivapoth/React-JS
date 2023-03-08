
import axios, { Axios } from 'axios'

const PRODUCT_API_BASE_URL = "http://localhost:3001/products"
class ProductService {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL)
  }
  createProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL, product)
  }
  getProductId(pid) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + pid)
  }
  updateProduct(product, pid) {
    return axios.put(PRODUCT_API_BASE_URL + "/" + pid, product)
  }
  deleteProduct(pid) {
    return axios.delete(PRODUCT_API_BASE_URL + "/" + pid)
  }
}
export default new ProductService()

