import React from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

class AppContainer extends React.Component {
  render() {
    return (
      <main>
        <div>&nbsp;Current language: {this.props.lang}</div>
        <div>&nbsp;Current translations: {JSON.stringify(this.props.transaltions)}</div>
        <br />
        <div style={{ marginLeft: '10px' }}>{this.context.t('_enero_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_febrero_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_marzo_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_abril_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_mayo_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_junio_')}</div>
        <div style={{ marginLeft: '10px' }}>{this.context.t('_julio_')}</div>
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
