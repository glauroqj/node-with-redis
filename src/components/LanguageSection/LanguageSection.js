import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** providers */
import { LanguageContext } from 'providers/Language'
/**style */
import * as El from './LanguageSection.style'
/** components */
import Button from '../Button/Button'

const LanguageSection = () => {
  const { language, switchLanguage } = useContext(LanguageContext)

  const languageOptions = [
    {label: 'PT', value: 'pt'},
    {label: 'EN', value: 'en'},
    {label: 'ES', value: 'es'}
  ]

  return (
    <El.LanguageContainer>
      {languageOptions &&
        languageOptions.map((item, idx) => (
          <El.LanguageItem key={idx}>
            <Button
              actionClick={() => switchLanguage(item.value)}
              variant={item.value === language ? 'contained' : 'outline'}
              size='sm'
              color='default'
            >
              {item.label}
            </Button>
          </El.LanguageItem>
        ))
      }
    </El.LanguageContainer>
  )
}

export default LanguageSection