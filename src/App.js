import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import Recipe from "./pages/Recipe";

import './index.css'

function App() {
  return (
    <>
     <Header />
     <main className='container content'>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/category/:name'  component={Category}/>
        <Route path='/meal/:id' component={Recipe} />
        <Route component={NotFound}/>
       </Switch>
     </main>
     <Footer />
    </>
  );
}

export default App;
