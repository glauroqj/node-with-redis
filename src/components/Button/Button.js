import React from 'react'
import PropTypes from 'prop-types'

/**style */
import * as El from './Button.style'

const Button = (
  {
    color,
    variant,
    children,
    buttonLoading,
    fullWidth,
    loadingSize,
    disabled,
    actionClick,
    size,
    rounded
  }) => {

  if (buttonLoading) return (
    <El.ButtonLoading
      loadingSize={loadingSize}
    />
  )

  return (
    <El.Button 
      type="button"
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      rounded={rounded}
      onClick={ e => actionClick(e) }
    >
      {children}
    </El.Button>
  )
}

Button.defaultProps = {
  color: 'default',
  variant: 'contained',
  size: 'sm',
  buttonLoading: false,
  fullWidth: false,
  disabled: false,
  loadingSize: '30px',
  rounded: false
}

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'default'
  ]),
  variant: PropTypes.oneOf([
    'contained',
    'text',
    'outline'
  ]),
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  buttonLoading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loadingSize: PropTypes.string,
  disabled: PropTypes.bool,
  actionClick: PropTypes.func,//.isRequired,
}

export default Button
