const remoteURL = "http://127.0.0.1:8000"

const searchRequest = async (keywords) => {
    let myRequest = await fetch(`${remoteURL}/product?search=${keywords}`).then(data => data.json())
    return myRequest
}

export default searchRequest