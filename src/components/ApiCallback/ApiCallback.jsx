import axios from "axios";

 async function ApiCallback(url){
    let productList;
    await axios.get(url)
    .then(res => {
        productList = res.data;

    })
    .catch(error => console.log(error.message));
    return productList;
}
export default ApiCallback;