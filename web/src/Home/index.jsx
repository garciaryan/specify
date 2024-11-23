import { useEffect, useState } from "react";
import Button from '@mui/joy/Button';

export default function Home() {
  const [playlists, setPlaylists] = useState();
  const [user, setUser] = useState({});
  const access_token = localStorage.getItem('sp-access_token');
  const openSpotifyAuthorization = () => {
    fetch(`${process.env.REACT_APP_API_ROUTE}/login`)
      .then(res => window.location.href = res.url)
      .catch(err => {
        throw new Error(err.message);
      });
  }

  const getRefreshToken = async () => {
    return fetch(`${process.env.REACT_APP_API_ROUTE}/refresh_token?refresh_token=${localStorage.getItem('sp-refresh_token')}`)
      .then(res => console.log('refresh: ', res));
  }

  const getPlaylist = () => {
    // will have to call our local api
    fetch(`${process.env.REACT_APP_SPOTIFY_API}/browse/new-releases`, {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      // .then(res => setPlaylists(res))
  }

  useEffect(() => {
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    }).then(res => {
      if (res.status === 401) {
        getRefreshToken();
      } else return res.json();
    }).then(res => setUser(res))
  }, []);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const access_token = urlParams.get('access_token');
    const refresh_token = urlParams.get('refresh_token');
    localStorage.setItem('sp-access_token', access_token);
    localStorage.setItem('sp-refresh_token', refresh_token);
    urlParams.delete('access_token');
    urlParams.delete('refresh_token');
  }, []);

  return (
    <div className="homepage">
      {!user && <Button variant="solid" onClick={openSpotifyAuthorization}>Log in with Spotify</Button>}

      <Button onClick={getPlaylist}>GetPlaylist</Button>
      <div>
        {playlists}
      </div>
    </div>
  );
}