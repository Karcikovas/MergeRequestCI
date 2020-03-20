// import 'regenerator-runtime/runtime'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { PersistGate } from 'redux-persist/integration/react'
// import { Provider } from 'react-redux'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Dashboard from './Pages/Dashboard/Dashboard'
// import configureStore from '../core/store'
// import '../assets/scss/main.scss'
// import Footer from './Pages/Footer/Footer'
// const { store, persistor } = configureStore()
// import { routes } from '../core/config/routes'
// import Projects from './Pages/Projects/List'
// import Header from './Pages/Header/Header';
//
// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <Router>
//                 <Header />
//                 <Route exact path={routes.homepage} component={Dashboard} />
//                 <Route
//                     exact
//                     path={routes.projects.index}
//                     component={Projects}
//                 />
//             </Router>
//
//             <Footer />
//         </PersistGate>
//     </Provider>,
//     document.getElementById('app')
// )
