const TokenManager = {

    setToken(token) {
        if(token && token !== '') {
            localStorage.setItem('api-jwt', token);
        }
    },

    removeToken() {
        localStorage.removeItem('api-jwt');
    },

    getToken() {
        const token = localStorage.getItem('api-jwt');
        if(!token) return null;
        if(token === '') return null;
        return token;
    },

    isConnected() {
        const token = localStorage.getItem('api-jwt');
        return token !== null && token !== '';
    }

}

export default TokenManager;