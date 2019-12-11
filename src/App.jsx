import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route} from 'react-router-dom';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';
import { Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';

import Header from './containers/Header';
import News from './containers/News';
import Pictures from './containers/Pictures'
import Contact from './containers/Contact';
import About from './containers/About';
import Join from './containers/Join';
import Member from './containers/Member'
import Login from './containers/Login'
import Concert from './containers/Concert';
import Tickets from './containers/Tickets.jsx';
import Concert_home from './containers/Concert_home';
import Concert_2019 from './containers/Concert_2019'
import Error from './components/Error';
import Footer from './containers/Footer';
import Program_191103 from './programs/Program_191103'
import './index.css';
import './static/css/articles.css'
import './static/css/about.css'
import './static/css/tickets.css'
import './static/css/concert.css'

import concertRoutes from './concert';
import newsRoutes from './news';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

  componentDidMount() {
    const { pathname } = this.props.history.location;
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }

  render() {
    return (
      <Provider store={this.props.store} >
        <ConnectedRouter history={this.props.history}>
          <Security
            issuer='https://dev-286685.okta.com/oauth2/default'
            clientId='0oa25kr51tqo5ktJS357'
            redirectUri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}
            pkce={true}
             >
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
                <Route exact path='/join' component={Join} />
                <SecureRoute exact path='/member' component={Member} />
                <Route path='/login' render={() => <Login baseUrl='https://dev-286685.okta.com' />} />
                <Route path='/implicit/callback' component={ImplicitCallback} />
                <Route exact path='/tickets' component={Tickets} />
                <Route path='/concert' component={Concert} />
                <Route exact path='/concert/home' component={Concert_home}/>
                <Route exact path='/concert/light_and_magic' component={Concert_2019}/>
                <Route exact path='/programs/191103' component={Program_191103}/>
                <Route path='/error' component={Error} />
                {newsRoutes()}
                {concertRoutes()}
              </div>
              <Footer />
            </div>
          </Security>
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
