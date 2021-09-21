import './App.css';
import React from 'react';
import About from './About';
import Home from './T_Home';
import Addassignment from './Add_assignment';
import Assignment from './Assignment';
import Editassignment from './Edit_assignment';
import Submission from './Submission';
import ViewSubmission from './ViewSubmission';

import {Route , Link} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:[]};
  }

  callAPI(){
    /*fetch("http://localhost:9000/test")
      .then(res=> res.json())
      .then(res => this.setState({apiResponse:res}));*/
  }

  componentWillMount(){
    this.callAPI();
  }

  render(){
    var dd = this.state.apiResponse;
    var ss = "";
    return (
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route exact path="/teacher" component={Home}/>
        <Route exact path="/about" component={About} /> 
        <Route exact path="/addassignment" component={Addassignment} /> 
        <Route exact path="/assignment" component={Assignment} /> 
        <Route exact path="/editassignment/:id" component={Editassignment} /> 
        <Route exact path="/submission" component={Submission} /> 
        <Route exact path="/viewsubmission/:id" component={ViewSubmission} /> 
      </div>
    );
  }
  
}
/*{dd.map(user => 
<h1>{user.fname}</h1>
)}*/


export default App;
