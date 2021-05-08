import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainBlogPage from './MainBlogPage';
import BlogPage from './BlogPage';

const App = () => {
    
    return(
        <main className="main-container">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={MainBlogPage}></Route>
                    <Route path="/blog/:id" exact component ={BlogPage}></Route>
                </Switch>
                <Footer />
            </Router>
        </main>
    )
}

export default App