import { Sheet, Typography, Slider, Box, Tooltip, Checkbox } from "@mui/joy";
import { useState, useEffect } from "react";
import { decimalOptions, intOptions, textInputOptions } from "../helpers/advancedOptions";
import { percentToDecimal } from "../helpers/percentage";

export default function AdvancedOptions({ options, setOptions }) {
  const [activeOptions, setActiveOptions] = useState(decimalOptions);

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

  useEffect(() => {
    setOptions(activeOptions);
  }, [activeOptions])

  return (
    <Sheet sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '24px' }}>
      <Typography level="h2" sx={{ mb: 2 }}>Get <i>really</i> specific</Typography>
      {activeOptions.map((option, index) => (
        <Box key={index} sx={{ width: '100%', mt: '24px' }}>
          <Tooltip
            variant="plain"
            placement="top"
            title={
              <Box sx={{ maxWidth: '500px' }}>{option.tooltip}</Box>}
            >
            <Typography level="title-lg">{option.label}</Typography>
          </Tooltip>
          <Checkbox
            label="include"
            sx={{ my: 2 }}
            onChange={(e) => {
              setActiveOptions(activeOptions.map(opt => {
                if (opt.label === option.label) {
                  return { ...opt, enabled: !opt.enabled }
                } else {
                  return opt;
                }
              }))
            }}
            name={option.label}
          />
          <Slider
            disabled={!option.enabled}
            name={`${option.label}-input`}
            aria-label={option.label}
            defaultValue={option.default}
            min={option.min}
            max={option.max}
            valueLabelDisplay="auto"
            marks={marks}
            onChangeCommitted={(e, val) => {
              setActiveOptions(activeOptions.map(opt => {
                if (opt.label === option.label) {
                  return { ...opt, value: val }
                } else {
                  return opt;
                }
              }))
            }}
          />
        </Box>
      ))}
    </Sheet>
  )
}
