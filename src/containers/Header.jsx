import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import WhiteLogo from '../img/headerlogo01.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '../index.css';
import '../static/css/header.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHide: false,
      navExpanded: false
    }
  }

  hideBar = () => {
     const isHide = this.state.isHide;
     const expanded = this.state.navExpanded

     window.scrollY > this.prev && expanded === false?
     !isHide && this.setState({ isHide: true })
     :
     isHide && this.setState({ isHide: false });

     this.prev = window.scrollY;
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }
  closeNav = () => {
    this.setState({ navExpanded: false });
  }

  componentDidMount(){
      window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
       window.removeEventListener('scroll', this.hideBar);
  }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    const lists = this.props.links.map(link => {
      return (
        <Nav.Link
          key={link.text}
          onClick={() => {this.props.linkToPage(link.type,link.url);this.closeNav()}}
          >{link.text}
        </Nav.Link>
      );
    });
    return (
      <Navbar
        className={classHide}
        collapseOnSelect
        expand="md"
        bg='white'
        variant="light"
        sticky='top'
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        <Navbar.Brand href="">
          <img src={WhiteLogo} alt='Mμsicart' width='150' onClick={() => this.props.linkToPage('Route','/')}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav onSelect={this.closeNav}>
            {lists}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({links,concert}) => {
  return{
    links: links.headerLinks,
    concert: concert.concert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    linkToPage(type,url){
      switch (type) {
        case 'Route':{
          return (dispatch(push(url)));
        }
        case 'a':{
          window.location.href=url;
          break;
        }
        default:{
          return dispatch(push('/error'));
        }
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
