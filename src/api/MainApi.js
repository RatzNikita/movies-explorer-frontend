class Api {
    constructor(options) {
        this._options = options
    }

    signUp(userInfo) {
        return fetch(`${this._options.baseUrl}/signup`, {
            method: 'POST', headers: this._options.headers,
            body: JSON.stringify(userInfo)
        })
            .then(res => {
               return this._checkStatus(res)
            })
    }

    signIn(userInfo) {
        return fetch(`${this._options.baseUrl}/signin`, {
            method: 'POST', headers: this._options.headers,
            body: JSON.stringify(userInfo)
        })
            .then(res => {
                return this._checkStatus(res)
            }).then((data) => {
                if (data.token){
                    localStorage.setItem('token', data.token);
                    this.setToken(data.token)
                    return data;
                }
            })
    }

    getSavedMovies() {
        return fetch(`${this._options.baseUrl}/movies`, {
            method: 'GET', headers: this._options.headers,
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    return []
                }
            })
            .catch(err => console.log(err))
    }

    saveMovie(movie) {
        return fetch(`${this._options.baseUrl}/movies`, {
            method: 'POST', headers: this._options.headers,
            body: JSON.stringify(movie)
        }).then(res => {
            return this._checkStatus(res)
        })
    }

    removeMovie(id) {
        return fetch(`${this._options.baseUrl}/movies/${id}`, {
            method: 'DELETE', headers: this._options.headers,
        })
            .then(res => {
                return this._checkStatus(res)
            })
    }

    setUserInfo({name, email}) {
        return fetch(`${this._options.baseUrl}/users/me`, {
            method: 'PATCH', headers: this._options.headers, body: JSON.stringify({name, email})
        })
            .then(res => {
                return this._checkStatus(res)
            })
    }

    checkToken() {
        return fetch(`${this._options.baseUrl}/users/me`, {
            method: 'GET',
            headers: this._options.headers
        })
            .then(res => this._checkStatus(res))
    }


    _checkStatus(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    }


    setToken(token) {
        this._options.headers.authorization = `Bearer ${token}`
    }
}

export const api = new Api({
    baseUrl: 'https://api.ratz-movies-search.nomoreparties.co', headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
