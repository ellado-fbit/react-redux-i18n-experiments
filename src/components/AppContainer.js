import React from 'react'
import { connect } from "react-redux"
import { setLanguage } from 'redux-i18n/immutable'
import { setTranslations } from 'redux-i18n'
import PropTypes from 'prop-types'

class AppContainer extends React.Component {

  changeLanguage = (lang) => {
    this.props.dispatch(setLanguage(lang))
  }

  addTranslationHello = () => {
    const newTranslation = {
      es: { _hello_: 'hola' },
      en: { _hello_: 'hello' }
    }
    setTimeout(() => {
      this.props.dispatch(setTranslations(newTranslation, { preserveExisting: true }))
    }, 500)
  }

  addTranslationBye = () => {
    const newTranslation = {
      es: { _bye_: 'adiós' },
      en: { _bye_: 'bye' }
    }
    setTimeout(() => {
      this.props.dispatch(setTranslations(newTranslation, { preserveExisting: true }))
    }, 500)
  }

  render() {
    return (
      <main style={{ padding: '10px' }}>
        <div>Current language: {this.props.lang}</div>
        <div>{this.context.t('_enero_')}</div>
        <div>{this.context.t('_febrero_')}</div>
        <div>{this.context.t('_marzo_')}</div>
        <div>{this.context.t('_abril_')}</div>
        <div>{this.context.t('_mayo_')}</div>
        <div>{this.context.t('_junio_')}</div>
        <button onClick={() => { this.changeLanguage(this.props.lang === 'es' ? 'en' : 'es') }}>Change language</button>
        <br /><br />
        <div>Current translations: {JSON.stringify(this.props.translations)}</div>
        <button onClick={() => { this.addTranslationHello() }}>Add translation _hello_</button>
        <br />
        <button onClick={() => { this.addTranslationBye() }}>Add translation _bye_</button>
      </main>
    )
  }
}

AppContainer.contextTypes = {
  t: PropTypes.func
}

const mapStateToProps = state => {
  return {
    lang: state.getIn(['i18nState', 'lang']),
    translations: state.getIn(['i18nState', 'translations']),
  }
}

export default connect(mapStateToProps)(AppContainer)
