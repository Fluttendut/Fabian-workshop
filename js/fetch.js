const url = "http://localhost:8080/emailreply"

async function fetchAny(url) {
    console.log(url)
    let options = {
        method: 'post',
        headers: {
            //'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            "Content-Type": "application/json"
        },
        mode: 'cors'
    };
    console.log(options)
    return await fetch(url, options)
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw Error(res.statusText)
            }
        })
}