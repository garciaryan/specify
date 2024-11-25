export const openSpotifyAuthorization = () => {
  fetch(`${process.env.REACT_APP_API_ROUTE}/login`)
    .then(res => window.location.href = res.url)
    .catch(err => {
      throw new Error(err.message);
    });
}

export const getRefreshToken = async () => {
  return fetch(`${process.env.REACT_APP_API_ROUTE}/refresh_token?refresh_token=${localStorage.getItem('sp-refresh_token')}`)
    .then(res => console.log('refresh: ', res));
}

const access_token = localStorage.getItem('sp-access_token');
export const reqHeaders = {
  Authorization: 'Bearer ' + access_token
};

export const spotifySearch = async (query, param, limit) => {
  return await fetch(
    `${process.env.REACT_APP_SPOTIFY_API}/search?q=${query}&type=${param}&limit=${limit}`,
    {headers: reqHeaders})
      .then(res => res.json());
} 