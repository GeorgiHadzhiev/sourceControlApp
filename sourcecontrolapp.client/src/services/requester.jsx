export const request = async (method, url, data, own) => {

    let result = null;
    const token = getToken();

    if (own) {

        result = fetch(url, {

            headers: {

                'content-type': 'application/json',
                'X-Authorization': token,

            },


        });


    }
    else if (method === 'GET') {

        result = fetch(url);

    }
    else if (method === 'POST') {

        result = fetch(url, {

            method,
            headers: {

                'content-type': 'application/json',
                'X-Authorization': token,

            },
            body: JSON.stringify(data)

        })

    }
    else if (method === 'DELETE') {

        result = fetch(url, {

            method: 'DELETE',
            headers: {

                'X-Authorization': token,

            },

        })

    }
    else if (method === 'PACH') {

        result = fetch(url, {

            method,
            headers: {

                'content-type': 'application/json',
                'X-authorization': token,

            },
            body: JSON.stringify(data)

        })

    }
    else {


        result = fetch(url, {

            method,
            headers: {

                'content-type': 'application/json',
                'X-Authorization': token,

            },
            body: JSON.stringify(data),

        });

    }

    return result.then(responseHandler)

}

async function responseHandler(res) {

    let jsonData = await res.json();

    if (res.ok) {

        return jsonData

    }
    else {

        throw jsonData.Message

    }

}
function getToken() {

    try {

        let user = localStorage.getItem('user');

        if (!user) {

            const errorMEssage = { message: 'You must be logged in for this action' }
            throw errorMEssage;

        }
        let userData = JSON.parse(user)

        return userData.accessToken;

    }
    catch (err) {

        console.log(err)

    }

}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const deletePost = request.bind(null, 'DELETE');