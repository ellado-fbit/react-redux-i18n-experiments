import React from 'react'
import { connect } from "react-redux"
import { setLanguage } from 'redux-i18n'
import PropTypes from 'prop-types'

class AppContainer extends React.Component {

  changeLanguage = (lang) => {
    this.props.dispatch(setLanguage(lang))
  }

  render() {
    return (
      <main>
        <div style={{ marginLeft: '10px' }}>Current language: {this.props.lang}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_enero_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_febrero_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_marzo_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_abril_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_mayo_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_junio_')}</div>
        <br />
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => { this.changeLanguage(this.props.lang === 'es' ? 'en' : 'es') }}
          >
          Change language
        </button>
        <br /><br />
        <div style={{ marginLeft: '10px' }}>Current translations: {JSON.stringify(this.props.transaltions)}</div>
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
