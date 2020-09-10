const checkToken = () => {
    return window.localStorage.getItem("fetch-is-not-a-thing");
}

export default checkToken;