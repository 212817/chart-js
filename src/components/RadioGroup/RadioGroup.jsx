import React, { useState } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MUIRadioGroup,
} from '@mui/material'

/* A function that returns a React component. */
export const RadioGroup = ({ list, callbackRadio, label, defaultState }) => {
  const [value, setvalue] = useState(defaultState)

  /**
   * When the user changes the value of the radio button, set the value of the radio button to the target
   * value and call the callback function with the target value.
   */
  const handleChange = (e) => {
    const target = e.target.value
    setvalue(target)
    callbackRadio(target)
  }

  return (
    <FormControl sx={{ mt: 2, ml: 1 }}>
      <FormLabel id="Radio-buttons-group-label">{label}</FormLabel>
      <MUIRadioGroup
        value={value}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        {list.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  )
}
