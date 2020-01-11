// import { hot } from 'react-hot-loader/root';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import EditDashboard from './Pages/EditDashboard'
import { loadPullRequests } from './actions'
import configureStore from './store'
import '../assets/scss/main.scss'
import Footer from './Pages/Footer/Footer';
import Toolbar from './Pages/Header/Header'
const store = configureStore()

store.dispatch(loadPullRequests())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Toolbar />

            <div className="body test">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/settings" component={EditDashboard} />
            </div>
        </Router>

        <Footer />
    </Provider>,
    document.getElementById('app')
)
