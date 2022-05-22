import { TextField as MUITextField } from '@mui/material'
import { useState } from 'react'

/**
 * This function is a React component that renders a text field that updates the data when the user
 * presses the Enter key or when the user leaves the text field.
 */
export const TextFieldSubmit = ({
  id,
  label = '',
  initialvalue = '',
  updateData,
  ...props
}) => {
  const [value, setValue] = useState(initialvalue)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  /**
   * If the key pressed is the Enter key, then update the data with the id and value.
   */
  const handleEnter = (e) => {
    e.key === 'Enter' && updateData({ id, value })
  }
  return (
    <MUITextField
      value={value}
      label={label}
      onChange={handleChange}
      onKeyUp={handleEnter}
      onBlur={() => updateData({ id, value })}
      {...props}
      fullWidth
      sx={{ mt: 2 }}
    />
  )
}
