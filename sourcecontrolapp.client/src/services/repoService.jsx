const baseUrl = 'https://localhost:7035/Repo'

async function add(code, name, description, visibility, contributors, token) {

    let res = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ code, name, description, visibility, contributors })
    })

    let jsonResult = await res.json();

    if (res.ok) {

        return jsonResult;

    }
    else {

        throw jsonResult.message;

    }

}