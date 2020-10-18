import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/bootstrap4/bootstrap.min.css'
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'


const Issues = lazy(()=> import('./container/issues.container'));
const Body = lazy(()=> import('./pages/components/Body'));

function App() {
  return (
    <Router>
    
    <Suspense fallback={<div> Loading ...</div>} >
             
        <Switch>
           
            <Route exact path='/old' component={Issues}/>
            <Route exact path='/' component={Body}/>

        </Switch>
            {/*<Newsletter/>*/}
            {/*<Footer/>*/}
    </Suspense>

</Router>
  );
}

export default App;
