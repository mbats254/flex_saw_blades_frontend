import React from 'react';
import {  Route, BrowserRouter } from 'react-router-dom';

// import Greet from './components/Greet';
import Welcome from './components/Welcome';
import All_Products from './components/All_Products';
import About from './components/About';
import SingleProduct from './components/SingleProduct';
// import Auth from './components/Auth/Auth';
// import Error404 from './components/404/Error404';
// import Dashboard from './containers/Dashboard/Dashboard';
// import { history } from './history';

const Routes = () => {
	return (
		<BrowserRouter>
				{/* Route Definitions */}
				
				
                <Route exact path='/' component={Welcome} />
                <Route exact path='/all/products' component={All_Products} />
                <Route exact path='/single/product/:uniqid' component={SingleProduct} />
                <Route exact path='/about/us' component={About} />
                
				
				{/* <Route exact path='/login' component={Auth} /> */}
				{/* <Route exact path='/register' component={Auth} /> */}
				{/* <Route exact path='/404' component={Error404} /> */}
				{/* <Redirect from='*' to='/404' /> */}
				</BrowserRouter>
	);
};

export default Routes;
