import * as request from  './requester.jsx'
const baseUrl = 'https://localhost:7035/Repo'

const create = async () => request.post(`${baseUrl}/Create`)

const token = getToken();

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
function getToken() {

    try {

        let user = localStorage.getItem('user');

        if (!user) {

            const errorMEssage = { message: 'You must be logged in for this action!' }
            throw errorMEssage;

        }
        let userData = JSON.parse(user)

        return userData.accessToken;

    }
    catch (err) {

        console.log(err)

    }

}

const repoService = {

    create,

}

export default repoService;