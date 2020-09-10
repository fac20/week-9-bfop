export const login = (username, password) => {
    return fetchHelper("login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
    });
}

const fetchHelper = async (url, options) => {
    try {
        const response = await fetch(`https://fun-facs-api.herokuapp.com/${url}`, options);
        if (!response.ok) {
            const error = new Error("HTTP Error");
            error.status = response.status;
            throw error;
        }
        else {
            return response.json();
        }
    }
    catch (error_1) {
        console.error(error_1);
    }
  };