const remoteURL = 'http://localhost:8000'

export default {
    postNewProduct(product) {
        return fetch(`${remoteURL}/product`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            },
            body: JSON.stringify(product)
        })
    },
    getProductTypes() {
        return fetch(`${remoteURL}/producttypes`).then(data => data.json())
    },
    getProducts() {
        return fetch(`${remoteURL}/product`).then(data => data.json())
    },
    deleteProduct(id) {
        return fetch(`${remoteURL}/product/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
    },
    async searchRequest(keywords) {
        let myRequest = await fetch(`${remoteURL}/product?search=${keywords}`).then(data => data.json())
        return myRequest
    }
}

