import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './Header';
import MainBlogPage from './MainBlogPage';

const App = () => {
    
    return(
        <main className="main-container">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={MainBlogPage}></Route>
                </Switch>
            </Router>
        </main>
    )
}

export default App