import React from 'react'
import { setLanguage } from 'redux-i18n/immutable'
import { setTranslations } from 'redux-i18n'
import { useSelector, useDispatch } from 'react-redux'

const AppContainerHook = () => {
  const lang = useSelector(state => state.getIn(['i18nState', 'lang']))
  const translations = useSelector(state => state.getIn(['i18nState', 'translations']))
  const dispatch = useDispatch()

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang))
  }

  const addTranslationHello = () => {
    const newTranslation = {
      es: { _hello_: 'hola' },
      en: { _hello_: 'hello' }
    }
    setTimeout(() => {
      dispatch(setTranslations(newTranslation, { preserveExisting: true }))
    }, 500)
  }

  const addTranslationBye = () => {
    const newTranslation = {
      es: { _bye_: 'adiós' },
      en: { _bye_: 'bye' }
    }
    setTimeout(() => {
      dispatch(setTranslations(newTranslation, { preserveExisting: true }))
    }, 500)
  }

  return (
    <main style={{ padding: '10px' }}>
      <div>Current language: {lang}</div>
      <button onClick={() => { changeLanguage(lang === 'es' ? 'en' : 'es') }}>Change language</button>
      <br /><br />
      <div>Current translations: {JSON.stringify(translations)}</div>
      <button onClick={() => { addTranslationHello() }}>Add translation _hello_</button>
      <br />
      <button onClick={() => { addTranslationBye() }}>Add translation _bye_</button>
    </main>
  )
}

export default AppContainerHook
