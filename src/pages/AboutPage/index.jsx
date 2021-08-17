import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import More from '../More';

function AboutPage() {
    const match = useRouteMatch();
    return (
        <>
            <div className='page-container'>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maiores?</p>
                <Router>
                    <Link to={`${match.url}/more`}>Learn more</Link>
                    <Switch>
                        <Route exact path={`${match.path}/more`}>
                            <More/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    )
}

export default AboutPage;
