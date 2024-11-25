import { ToggleButtonGroup, Button, Sheet, Typography } from "@mui/joy"

export default function Genres({ genres, selectedGenres, setSelectedGenres }) {
  return (
    <Sheet sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '24px' }}>
      <Typography level="h2" sx={{ mb: 2 }}>Select genres</Typography>
      <ToggleButtonGroup
        variant="soft"
        color="primary"
        spacing={2}
        sx={{ display: 'flex', flexFlow: 'wrap' }}
        value={selectedGenres}
        onChange={(event, newValue) => {
          setSelectedGenres(newValue)
        }}
      >
        {genres.map((genre, index) => (
          <Button
            key={index}
            value={genre}
            sx={{ fontSize: '20px', padding: '16px' }}
          >
            {genre}
          </Button>
        ))}
      </ToggleButtonGroup>
    </Sheet>
  )
}
