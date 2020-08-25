const api = () => {
    postNewProduct(product) {
        return fetch('http://127.0.0.1:8000/product/', {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
    }
}