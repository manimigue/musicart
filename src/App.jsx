import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Header from './containers/Header';
import News from './containers/News';
import Pictures from './containers/Pictures'
import Contact from './containers/Contact';
import About from './containers/About';
import Members from './containers/Members';
import Concert from './containers/Concert';
import Tickets from './containers/Tickets.jsx';
import Concert_home from './containers/Concert_home';
import Concert_2019 from './containers/Concert_2019'
import Error from './components/Error';
import Footer from './containers/Footer';
import './static/css/articles.css'
import './static/css/about.css'
import './static/css/tickets.css'
import './static/css/github1.css'
import './static/css/concert.css'

import concertRoutes from './concert';
import newsRoutes from './news';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

  render() {
    return (
      <Provider store={this.props.store} >
        <ConnectedRouter history={this.props.history}>
          <div className={this.props.concert ? 'body concert' : 'body'}>
            <Helmet>
              <title>{this.props.concert ? "Mμsicart Concerts" : "Mμsicart"}</title>
              <meta name="description" content={
                  this.props.concert ?
                  "Orchestra Mµsicartコンサート情報 : 「光と魔法のコンサート in 森のホール 21」 2019 年 11 月 3 日(日祝)\n 2019 年 6 月 20 日 チケット予約開始" :
                  "Orchestra Mµsicart公式ホームページ"
                }
                  />
            </Helmet>
            <Header />
            <Route exact path='/' component={Pictures} />
            <div className={`main`}>
              <Route exact path='/' component={News} />
              <Route exact path='/news' component={News} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/members' component={Members} />
              <Route exact path='/tickets' component={Tickets} />
              <Route path='/concert' component={Concert} />
              <Route exact path='/concert/home' component={Concert_home}/>
              <Route exact path='/concert/light_and_magic' component={Concert_2019}/>
              <Route path='/error' component={Error} />
              {newsRoutes()}
              {concertRoutes()}
            </div>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = ({concert}) => ({
  concert: concert.concert,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
