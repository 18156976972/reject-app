import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


export default class GoBack extends Component {
    GoBack(){
        this.props.history.goBack()
    }

    render() {
        return (
            <button onClick={this.goBack.bind(this)}>返回</button>
        )
    }
}

export default withRouter(GoBack)