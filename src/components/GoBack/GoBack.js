import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class GoBack extends Component {
    GoBack(){
        this.props.history.goBack()
    }

    render() {
        return (
            <button onClick={()=>this.GoBack()}>返回</button>
        )
    }
}

export default withRouter(GoBack)