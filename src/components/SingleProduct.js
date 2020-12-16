import React, { Component } from 'react'

export class SingleProduct extends Component {
    constructor(props) {
     super(props)
 
     this.state = {
          uniqid: '',
          item:''
     }
 }
 
 componentDidMount() {
        let uniqid = this.props.match.params.uniqid;
        const apiUrl = "http://127.0.0.1:8000/api/single/product/"+uniqid;
    
        fetch(apiUrl)
            .then((response) => response.json())
            // .then((data) => console.log('This is your data', data))
            .then(data => this.setState({ item: data }));
    }
    render() {
        // alert(this.state[0])
        var { item } = this.state;
        let uniqid = this.props.match.params.uniqid;
        var single_item = Object.values(item) 
             
        return (
            <div>
        <p>{single_item[1]}</p>
        <img src={"http://127.0.0.1:8000"+single_item[4]} alt="setting"/>
            </div>
        )
    }
}

export default SingleProduct
