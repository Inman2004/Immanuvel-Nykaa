import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
//import Teams from './pages/team';
import Blogs from './pages/blog';
import SignUp from './pages/signup';
import Login from './pages/login';
import Sample from './pages/sample';
import Search from './components/Navbar/search';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		{/* <Route path='/team' component={Teams} /> */}
		<Route path='/blog' component={Blogs} />
		<Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
	<Route path='/sample' component={Sample} />
	</Switch>
	</Router>
);
}



export default App;
