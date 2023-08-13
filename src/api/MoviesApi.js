class Api {
    constructor(options) {
        this._options = options
    }

    getMovies() {
        return fetch(`${this._options.baseUrl}`, {
            method: 'GET', headers: this._options.headers
        })
            .then(res => {
                return this._checkStatus(res)
            })
    }

    _checkStatus(res) {
        return res.ok ? res.json() : Promise.reject(res.json())
    }
}

export const moviesApi = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies', headers: {
        'Content-Type': 'application/json'
    }
});
