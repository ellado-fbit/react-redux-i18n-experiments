import React from 'react'
import { useSelector } from 'react-redux'

const AppContainerHook = () => {
  const lang = useSelector(state => state.getIn(['i18nState', 'lang']))
  const translations = useSelector(state => state.getIn(['i18nState', 'translations']))

  return (
    <main>
      <div>&nbsp;Current language: {lang}</div>
      <div>&nbsp;Current translations: {JSON.stringify(translations)}</div>
    </main>
  )
}

export default AppContainerHook
