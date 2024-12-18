import { useEffect, useState } from "react";
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet'
import Genres from "../components/Genres";
import Artists from "../components/Artists";
import Tracks from "../components/Tracks";
import AdvancedOptions from "../components/AdvancedOptions";
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Typography from "@mui/joy/Typography";
import { openSpotifyAuthorization, getRefreshToken, reqHeaders } from "../queries";
import { seeds } from "../helpers/genreSeeds";

export default function Home() {
  const [user, setUser] = useState(null);
  const [genreSeeds, setGenreSeeds] = useState(seeds);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [advancedOptions, setAdvancedOptions] = useState();

  const fetchAvailableGenreSeeds = async () => {
    return fetch(`${process.env.REACT_APP_SPOTIFY_API}/recommendations/available-genre-seeds`, {headers: reqHeaders})
      .then(res => res.json())
      .then(res => setGenreSeeds(res.genres))
      .catch(err => setGenreSeeds([seeds]))
  }

  useEffect(() => {
    fetch('https://api.spotify.com/v1/me', {headers: reqHeaders})
      .then(res => {
      if (res.status === 401) {
        getRefreshToken();
      } else return res.json();
    }).then(res => setUser(res))
  }, []);

  useEffect(() => {
    // if (!genreSeeds) fetchAvailableGenreSeeds();
  }, [])

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
    <Sheet className="homepage" sx={{ marginBottom: '64px' }}>
      {user && (
        <>
          <Typography level="h1">Specify</Typography>
          <Typography level="h4">For best results, get specific.</Typography>
          <AccordionGroup>
            <Accordion>
              <AccordionSummary sx={{ fontSize: '32px' }}>Genres</AccordionSummary>
              <AccordionDetails>
                <Genres genres={genreSeeds} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ fontSize: '32px' }}>Artists</AccordionSummary>
              <AccordionDetails>
                <Artists artists={selectedArtists} setSelectedArtists={setSelectedArtists} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ fontSize: '32px' }}>Tracks</AccordionSummary>
              <AccordionDetails>
                <Tracks tracks={selectedTracks} setSelectedTracks={setSelectedTracks} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ fontSize: '32px' }}>Advanced</AccordionSummary>
              <AccordionDetails>
                <AdvancedOptions options={advancedOptions} setOptions={setAdvancedOptions} />
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </>
      )}
      {!user && (
        <>
          <Typography level="h1">Welcome to Specify! Log in with your Spotify account to continue.</Typography>
          <Button onClick={openSpotifyAuthorization}>Log in with Spotify</Button>
        </>
      )}
    </Sheet>
  );
}