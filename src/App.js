import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import { i18nState } from 'redux-i18n/immutable'
import { Provider } from 'react-redux'
import I18n from 'redux-i18n/immutable'
import translations from './translations.json'
import AppContainer from './components/AppContainer'
// import AppContainerHook from './components/AppContainerHook'

const rootReducer = combineReducers({
  i18nState
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export const App = () => {
  return (
    <Provider store={store}>
      <I18n translations={translations} initialLang={'es'} fallbackLang={'en'}>
        <AppContainer />
        {/* <AppContainerHook /> */}
      </I18n>
    </Provider>
  )
}
