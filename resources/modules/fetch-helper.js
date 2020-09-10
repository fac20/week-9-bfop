const fetchHelper = (url, options) => {
  return fetch(`https://fun-facs-api.herokuapp.com/${url}`, options)
    .then((response) => {
      if (!response.ok) {
        const error = new Error("HTTP Error");
        error.status = response.status;
        throw error;
      } else {
        return response.json();
      }
    })
    .catch((error) => {
      console.error(error);
      // Draw a message to page to inform user of error
    });
};

export default fetchHelper;
