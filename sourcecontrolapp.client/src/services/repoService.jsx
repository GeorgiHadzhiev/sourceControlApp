import * as request from  './requester.jsx'
const baseUrl = 'https://localhost:7035/Repo'

const create = async (albumData) => request.post(`${baseUrl}/Create`, albumData,false)

async function createOld(code, repoName, description, visibility, contributors, UserId) {

    let res = await fetch(`${baseUrl}/Create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ code, repoName, description, visibility, contributors, UserId })
    })

    let jsonResult = await res.json();

    if (res.ok) {

        return jsonResult;

    }
    else {

        throw jsonResult.message;

    }

}


const repoService = {

    create,

}

export default repoService;