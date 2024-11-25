import { Sheet, Typography, Slider, Box, Tooltip, Checkbox } from "@mui/joy";
import { useState } from "react";
import { decimalOptions } from "../helpers/advancedOptions";
import { percentToDecimal } from "../helpers/percentage";

export default function AdvancedOptions({ options, setOptions }) {
  const [acousticnessEnabled, setAcousticnessEnabled] = useState(false);
  const [danceabilityEnabled, setDanceabilityEnabled] = useState(false);
  const [energyEnabled, setEnergyEnabled] = useState(false);
  const [instrumentalnessEnabled, setInstrumentalnessEnabled] = useState(false);
  const [livenessEnabled, setLivenessEnabled] = useState(false);
  const [speechinessEnabled, setSpeechinessEnabled] = useState(false);
  const [valenceEnabled, setValenceEnabled] = useState(false);

  const marks = [
    {
      value: 0,
      label: '0'
    },
    {
      value: 100,
      label: '100'
    }
  ];

  const changeHandler = (e, val) => {
    console.log(val)
  }
  return (
    <Sheet sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '24px' }}>
      <Typography level="h2" sx={{ mb: 2 }}>Get <i>really</i> specific</Typography>
      {decimalOptions.map((option, index) => (
        <Box key={index} sx={{ width: '100%', mt: '24px' }}>
          <Tooltip
            variant="plain"
            title={
              <Box sx={{ maxWidth: '500px' }}>{option.tooltip}</Box>}
            >
            <Typography level="title-lg">{option.label}</Typography>
          </Tooltip>
          <Checkbox label="include" onChange={(e) => console.log(e)} />
          <Slider
            disabled
            name={`${option.label}-input`}
            aria-label={option.label}
            defaultValue={option.default}
            min={option.min}
            max={option.max}
            valueLabelDisplay="auto"
            marks={marks}
            onChangeCommitted={changeHandler}
          />
        </Box>
      ))}
    </Sheet>
  )
}
