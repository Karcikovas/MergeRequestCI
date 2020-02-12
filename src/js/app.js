import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import EditDashboard from './Pages/Settings/Settings'
import configureStore from '../core/store'
import '../assets/scss/main.scss'
import Footer from './Pages/Footer/Footer'
import Toolbar from './Pages/Header/Header'
const { store, persistor } = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Toolbar />
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/settings" component={EditDashboard} />
            </Router>

            <Footer />
        </PersistGate>
    </Provider>,
    document.getElementById('app')
)
