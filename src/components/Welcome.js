import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './assets/css/style-starter.css' 
import Header from './Header'
import Slider from './Slider'
import Footer from './Footer'

class Welcome extends Component {
    constructor(props) {
        super(props);
    //     this.state = {
    //       items: []
    //  }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            <Header/>
            <Slider/>
          
            </div>
        );
    }
}

Welcome.propTypes = {

};

export default Welcome;