import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/bootstrap.css';
import './css/main.css';
import icon from './images/icon.jpg';
import TopPage from './TopPage';
/*削除予定*/
/*import WorksPage from './WorksPage';*/
import CareerPage from './CareerPage';
import StudyPage from './StudyPage';
import WorksPagesUpdate from './WorksPagesUpdate';
import RakusInternShip from './summerinternship/RakusInternShip';
import IstyleInternShip from './summerinternship/istyleInternship';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 768
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth <= 768 });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  render() {
    const { isMobile } = this.state;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light hline width-100" style={{ position: 'fixed', zIndex: 100 }}>
            <div className="container">
              <Link className="navbar-brand" to="/ka2coder-react/">
                <img src={icon} alt="Your Logo" className="circle-icon" />
              </Link>
              <span className="logo-font">Ka2Coder</span>
              {isMobile ? (
              <div className="nav nav-tabs">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">menu</button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/ka2coder-react/">Home</Link></li>
                  <li><Link className="dropdown-item" to="/ka2coder-react/Career">Career</Link></li>
                  <li><Link className="dropdown-item" to="/ka2coder-react/Works">Works</Link></li>
                  <li><Link className="dropdown-item" to="/ka2coder-react/Study">Study</Link></li>
                </ul>
              </div>
              ) : (
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/ka2coder-react/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ka2coder-react/Career">Career</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ka2coder-react/Works">Works</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ka2coder-react/Study">Study</Link>
                  </li>
                </ul>
              </div>
            )}
            </div>
          </nav>
          <Routes basename="/your-base-name">
            <Route path="/ka2coder-react" element={<TopPage />} />
            <Route path="/ka2coder-react/Career" element={<CareerPage />} />
            <Route path="/ka2coder-react/Works" element={<WorksPagesUpdate />} />
            <Route path="/ka2coder-react/Study" element={<StudyPage />} />
            <Route path='/ka2coder-react/Career/Rakus' element={<RakusInternShip />} />
            <Route path='/ka2coder-react/Career/istyle' element={<IstyleInternShip /> } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Page;
