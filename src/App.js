// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// import LoginForm from './components/pages/SignUp';
// import PCOSForm from './components/test';
// import HeroSection from './components/HeroSection';
// import BookingForm from './components/pages/BookingForm';
// import PeriodTracker from './components/pages/period-tracker';


// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />

//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/services' component={BookingForm} />
//           <Route path='/products' component={Products} />
//           <Route path='/sign-up' component={PCOSForm} />
//           {/* <Route path='/sign-up' component={PeriodTracker} /> */}
          

//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LoginForm from './components/pages/SignUp';
import PCOSForm from './components/test';
import HeroSection from './components/HeroSection';
import BookingForm from './components/pages/BookingForm';
import PeriodTracker from './components/pages/period-tracker';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={BookingForm} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={PeriodTracker} />
          {/* <Route path='/sign-up' component={PeriodTracker} /> */}
          

        </Switch>
      </Router>
    </>
  );
}

export default App;
