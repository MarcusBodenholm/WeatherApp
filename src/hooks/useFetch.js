export default function useFetch(baseUrl) {
    const get = url => {
        return fetch(baseUrl + url)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => console.log(error))
    }
    const post = (url, body) => {
        return fetch(baseUrl + url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
    } 
    return {get, post}
}