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
    }
}