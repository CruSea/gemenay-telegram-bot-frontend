import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/bootstrap4/bootstrap.min.css'
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'


const Issues = lazy(()=> import('./container/issues.container'));

function App() {
  return (
    <Router>
    
    <Suspense fallback={<div> Loading ...</div>} >
             
        <Switch>
           
            <Route exact path='/' component={Issues}/>
            
        </Switch>
            {/*<Newsletter/>*/}
            {/*<Footer/>*/}
    </Suspense>

</Router>
  );
}

export default App;
