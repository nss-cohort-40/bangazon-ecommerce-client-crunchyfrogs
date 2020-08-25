const remoteURL = 'http://127.0.0.1:8000'

export default {
    postNewProduct(product) {
        return fetch(`${remoteURL}/product/`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
    },
    getProductTypes() {
        return fetch(`${remoteURL}/producttypes`).then(data => data.json())
    }
}