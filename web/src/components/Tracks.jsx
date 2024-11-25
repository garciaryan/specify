import { Sheet, FormControl, Input, Button, Typography, Card, CardCover, CardContent, CardOverflow, IconButton, Box } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { spotifySearch } from "../queries";
import toast from "react-hot-toast";

export default function Tracks({ tracks, setSelectedTracks }) {
  const [searchText, setSearchText] = useState('');
  const [searchStatus, setSearchStatus] = useState('initial');
  const [searchResults, setSearchResults] = useState([]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchStatus('loading');
    try {
      const { tracks } = await spotifySearch(searchText, ['track'], 4);
      setSearchResults(tracks.items);
      setSearchStatus('initial');
    } catch {
      setSearchStatus('error')
    }
  }

  const handleAddTrack = (track) => {
    setSelectedTracks([...tracks, track]);
    toast.success(`${track.name} added!`)
  }

  useEffect(() => {
    console.log('tracks: ', searchResults);
  }, [searchResults])

  return (
    <Sheet sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '24px' }}>
      <Typography level="h2" sx={{ mb: 2 }}>Add tracks for reference</Typography>
      <form onSubmit={handleSubmit} id="artist-search">
        <FormControl>
          <Input
            size="lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Song title"
            endDecorator={
              <Button
                loading={searchStatus === 'loading'}
                type="submit">
                  Search
              </Button>
            }
          />
        </FormControl>
      </form>
      {searchResults.length > 0 && (
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, marginTop: '24px' }}
        >
          {searchResults.map(track => (
            <Card key={track.id} component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCover>
                {track.album.images.length > 0 && (
                  <img
                    src={track.album.images[0].url}
                    loading="lazy"
                    alt={`Picture of ${track.artists[0].name}`}
                  />
                )}
              </CardCover>
              <CardOverflow>
                <IconButton
                  aria-label="Add artist to list"
                  size="md"
                  variant="solid"
                  color="danger"
                  onClick={() => handleAddTrack(track)}
                  sx={{
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: '-15px',
                    transform: 'translateY(50%)',
                  }}
                >
                  <AddIcon />
                </IconButton>
              </CardOverflow>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent>
                <Typography
                  level="body-lg"
                  textColor="#fff"
                  sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                >
                  {track.name}
                </Typography>
                <Typography
                  level="body-md"
                  textColor="#fff"
                >
                  {track.artists[0].name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Sheet>
  )
}
