import { Sheet, Typography, Slider } from "@mui/joy";
import { allOptions } from "../helpers/advancedOptions";

export default function AdvancedOptions({ options, setOptions }) {
  return (
    <Sheet sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '24px' }}>
      <Typography level="h2" sx={{ mb: 2 }}>Get <i>really</i> specific</Typography>
      
    </Sheet>
  )
}
