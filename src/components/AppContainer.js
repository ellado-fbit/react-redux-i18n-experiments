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
      en: { _hello_: 'Hello' }
    }
    setTimeout(() => {
      this.props.dispatch(setTranslations(newTranslation, { preserveExisting: true }))
    }, 500)
  }

  addTranslationBye = () => {
    const newTranslation = {
      es: { _bye_: 'adiós' },
      en: { _bye_: 'Bye' }
    }
    setTimeout(() => {
      this.props.dispatch(setTranslations(newTranslation, { preserveExisting: true }))
    }, 500)
  }

  render() {
    return (
      <main style={{ padding: '10px' }}>
        <div><span style={{ textDecoration: 'underline' }}>Current language:</span> {this.props.lang}</div>
        <button style={{ marginTop: '7px' }} onClick={() => { this.changeLanguage(this.props.lang === 'es' ? 'en' : 'es') }}>Change language</button>
        <br /><br />
        <div><span style={{ textDecoration: 'underline' }}>Current context:</span></div>
        <div>{this.context.t('_enero_')}</div>
        <div>{this.context.t('_febrero_')}</div>
        <div>{this.context.t('_marzo_')}</div>
        <div>{this.context.t('_abril_')}</div>
        <div>{this.context.t('_mayo_')}</div>
        <div>{this.context.t('_junio_')}</div>
        <br /><br />
        <div><span style={{ textDecoration: 'underline' }}>Current translations:</span> {JSON.stringify(this.props.translations)}</div>
        <div>{
          this.props.translations[this.props.lang] &&
          this.props.translations[this.props.lang]['_hello_']
          }
        </div>
        <div>{
          this.props.translations[this.props.lang] &&
          this.props.translations[this.props.lang]['_bye_']
          }
        </div>
        <button style={{ marginTop: '7px' }} onClick={() => { this.addTranslationHello() }}>Add translation _hello_</button>
        <br />
        <button style={{ marginTop: '7px' }} onClick={() => { this.addTranslationBye() }}>Add translation _bye_</button>
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
