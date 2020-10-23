import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/bootstrap4/bootstrap.min.css'
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'



const Admin = lazy(()=> import('./pages/Admin'));
const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};
function App() {
  return (
    <Router>
    
    <Suspense fallback={<div> Loading ...</div>} >


        <Switch>

            {/*<Route exact path='/' component={Admin}/>*/}
            <Route exact path='/newGemenaye' component={Admin}/>
            <Route  path='/admin' component={Admin}/>
            {/*<Route component={NoMatchPage} />*/}

        </Switch>
            {/*<Newsletter/>*/}
            {/*<Footer/>*/}
    </Suspense>

</Router>
  );
}

export default App;
