import React, { useState } from 'react'
import PropTypes from 'prop-types'
/** style */
import * as El from './Input.style'

const Input = (
    {
      type,
      size,
      placeholder,
      onKeyDown,
      onChange,
      onBlur,
      endAdornment,
      startAdornment,
      name,
      hasError
    }
  ) => {
    const [focus, setFocus] = useState(false)

    return (
      <El.InputContainer
        hasFocus={focus}
        hasError={hasError}
      >
        {startAdornment && (
          <El.InputStartAdornment>
            {startAdornment}
          </El.InputStartAdornment>
        )}
        <El.Input
          type={type}
          size={size}
          name={name}
          placeholder={placeholder}
          onFocus={ () => setFocus(true) }
          onBlur={ e => { setFocus(false), onBlur(e) } }
          onKeyDown={ onKeyDown }
          onChange={ (e) => onChange(e.target.value) }
        />
        {endAdornment && (
          <El.InputEndAdornment
            size={size}
          >
            {endAdornment}
          </El.InputEndAdornment>
        )}
      </El.InputContainer>
    )
  }

Input.defaultProps = {
  type: 'text',
  size: 'sm',
  name: '',
  hasError: false,
  onBlur: () => {}
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'number',
    'text',
    'email',
    'tel'
  ]),
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  endAdornment: PropTypes.object,
  startAdornment: PropTypes.object,
  name: PropTypes.string,
  hasError: PropTypes.bool
}

export default Input
