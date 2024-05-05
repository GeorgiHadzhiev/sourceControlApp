const baseUrl = 'https://localhost:7035/User'
async function login(email, password) {

    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    let jsonResult = await res.json();

    if (res.ok) {

        return jsonResult;

    }
    else {

        throw jsonResult.message;

    }


}

async function register(firstName, lastName, email, password) {

    let res = await fetch(`${baseUrl}/register`, {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })

    })

    let jsonResult = await res.text();

    if (res.ok) {

        return jsonResult;

    }
    else {

        throw jsonResult.message;

    }

}

async function logout(token) {

    return fetch(`${baseUrl}/logout`, {

        headers: {

            'X-Authorization': token

        }

    })


}

const authService = {

    login,
    register,
    logout,

}

export default authService;