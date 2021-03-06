import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

@connect(({application}) => {
    return {
        setting: application.setting
    }
})
export default class ApplicationSetting extends Component {
    static propTypes = {
        setting: PropTypes.any,
        children: PropTypes.any,
        dispatch: PropTypes.func
    };
    static childContextTypes = {
        setting: PropTypes.any
    };

    getChildContext() {
        return {
            setting: {
                ...this.props.setting
            }
        };
    }

    render() {
        if (!this.props.setting) {
            console.info('application setting is undefined')
            return null;
        }
        console.info('application setting is ready')
        return this.props.children;
    }
}