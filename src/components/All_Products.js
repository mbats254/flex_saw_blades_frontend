import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export class All_Products extends Component {
    constructor(props) {
     super(props)
 
     this.state = {
          items: []
     }
 }
 
 componentDidMount() {
        const apiUrl = 'http://127.0.0.1:8000/api/all/products/';
        fetch(apiUrl)
            .then((response) => response.json())
            // .then((data) => console.log('This is your data', data))
            .then(data => this.setState({ items: data }));
    }

    render() {
        var { items } = this.state;
        return (
            <div>
                <Header/>
                <section class="w3l-about-breadcrumb position-relative text-center">
    <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div class="container py-lg-5 py-3">
        <h2 class="title">Products</h2>
        <ul class="breadcrumbs-custom-path mt-2">
          <li><a href="/">Home</a></li>
          <li class="active"><span class="fa fa-angle-double-right mx-2" aria-hidden="true"></span> Products </li>
        </ul>
      </div>
    </div>
  </section>

	<div class="w3-services py-5">
		<div class="container py-lg-4">
			<div class="title-content text-left mb-lg-5 mb-4">
				<h6 class="sub-title">Our Products</h6>
				<h3 class="hny-title">Great Products</h3>
				

			</div>
			<div class="row w3-services-grids">
                 {items.map(item => (   
            <div class="col-lg-4 col-md-6 causes-grid">
					<div class="causes-grid-info">
						<a href={"/single/product/"+item.uniqid}><img src={"http://127.0.0.1:8000"+item.photo} class="img-fuild" alt=""/></a>
						<a href="#" class="cause-title-wrap">
							<h4 class="cause-title">{item.name}
							</h4>
						</a>
						<p class="card-text mb-0">{item.description} 
						</p>

						<a href={"/single/product/"+item.uniqid} class="btn btn-style btn-primary mt-4">Read More</a>
					</div>
                </div>              
                ))
            }				
				
		
			</div>
		</div>
	</div>
            </div>
        )
    }
}

export default All_Products
