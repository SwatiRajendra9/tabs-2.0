import React from "react";
import Tabs from './Tabs.js';
import './App.css';
import axios from "axios";

class mainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'tabsArray' : [], 'gotResponse' : 'false', 'showTommy' : 'false' , 'showBigdrop' : 'false' , 'showCuker' : 'false'}
  }

  componentDidMount = () => {
    axios({
      method:'GET',
      url: 'https://course-api.com/react-tabs-project'
    })
    .then((response) => {
      this.setState({tabsArray:response.data});
      this.setState({gotResponse:true});
    }) 
  }

  render() {

    return(
      
      this.state.gotResponse ?
      <div id='main'>
            <div id='contents'>
                <div id='navigation-desc'>
                  <div id='navigation'>
                    <button id='name-1' onClick={this.clickedOnTommy} >TOMMY</button>
                    <button id='name-2' onClick={this.clickedOnBigdrop} >BIGDROP</button>
                    <button id='name-3' onClick={this.clickedOnCuker}>CUKER</button>
                  </div>
                  { 
                  
                    this.state.showTommy?
                    this.state.tabsArray.slice(0,1).map((element,index) => ( 
                      <Tabs title={element.title} date={element.dates} company={element.company} duties={element.duties}/>
                    )) : 
                    this.state.showBigdrop?
                    this.state.tabsArray.slice(1,2).map((element,index) => ( 
                      <Tabs title={element.title} date={element.dates} company={element.company} duties={element.duties}/>
                    )) : 
                    this.state.showCuker?
                    this.state.tabsArray.slice(2,3).map((element,index) => ( 
                      <Tabs title={element.title} date={element.dates} company={element.company} duties={element.duties}/>
                    )) : null

                  }
                </div>
            </div>
      </div> : <p>Loading...</p>
    )
  }

  clickedOnTommy = () => {
    this.setState({showTommy:true});
    this.setState({showBigdrop:false});
    this.setState({showCuker:false});
  }

  clickedOnBigdrop = () => {
    this.setState({showTommy:false});
    this.setState({showBigdrop:true});
    this.setState({showCuker:false});
  }

  clickedOnCuker = () => {
    this.setState({showTommy:false});
    this.setState({showBigdrop:false});
    this.setState({showCuker:true});
  }
}

export default mainComponent;