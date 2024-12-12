const baseUrl = 'https://localhost:7035/Repo'

const token = getToken();

async function create(code, name, description, visibility, contributors) {

    let res = await fetch(`${baseUrl}/create`, {
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