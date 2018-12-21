import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import WizardStep2 from './Components/Wizard/WizardStep2'
import WizardStep3 from './Components/Wizard/WizardStep3'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/wizard' component={Wizard}/>
        <Route exact path='/wizard/2' component={WizardStep2}/>
        <Route exact path='/wizard/3' component={WizardStep3}/>
    </Switch>
)


