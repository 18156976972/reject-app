import React, { Component } from 'react'
import Person from './components/person/Person'
import Order from './components/order/Order'

export default class Mine extends Component {
    render() {
        return (
            <div>
                <Person></Person>
                <Order></Order>
            </div>
        )
    }
}
