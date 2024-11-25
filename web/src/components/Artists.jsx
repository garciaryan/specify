import {
  Sheet,
  Input,
  Button,
  FormControl,
  Card,
  CardContent,
  CardCover,
  Typography,
  CardOverflow,
  Box,
  IconButton
} from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { spotifySearch } from '../queries';

export default function Artists({ artists, setSelectedArtists }) {
  const [searchText, setSearchText] = useState('');
  const [searchStatus, setSearchStatus] = useState('initial');
  const [searchResults, setSearchResults] = useState([]); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchStatus('loading');
    try {
      const { artists } = await spotifySearch(searchText, ['artist'], 8);
      setSearchResults(artists.items);
      setSearchStatus('initial');
    } catch {
      setSearchStatus('error');
    }
  };

  const handleAddArtist = (artist) => {
    setSelectedArtists([...artists, artist]);
    toast.success(`${artist.name} added!`);
  }

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults])

  return (
    <Sheet sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '24px' }}>
      <Typography level="h2" sx={{ mb: 2 }}>Add artists that fit the vibe</Typography>
      <form onSubmit={handleSubmit} id="artist-search">
        <FormControl>
          <Input
            size="lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Marvin Gaye, Kraftwerk, etc."
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
          {searchResults.map(artist => (
            <Card key={artist.id} component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCover>
                {artist.images.length > 0 && (
                  <img
                    src={artist.images[0].url}
                    loading="lazy"
                    alt={`Picture of ${artist.name}`}
                  />
                )}
              </CardCover>
              <CardOverflow>
                <IconButton
                  aria-label="Add artist to list"
                  size="md"
                  variant="solid"
                  color="danger"
                  onClick={() =>handleAddArtist(artist)}
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
                  {artist.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Sheet>
  );
}
