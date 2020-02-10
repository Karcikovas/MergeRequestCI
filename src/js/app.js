import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import EditDashboard from './Pages/Settings/Settings'
import configureStore from '../core/store'
import '../assets/scss/main.scss'
import Footer from './Pages/Footer/Footer'
import Toolbar from './Pages/Header/Header'
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Toolbar />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/settings" component={EditDashboard} />
        </Router>

        <Footer />
    </Provider>,
    document.getElementById('app')
)
