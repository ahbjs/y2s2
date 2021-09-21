import React from 'react';
import './assets/css/assignment.css';
import $ from 'jquery';
import { Helmet } from 'react-helmet'
import ViewSubmission from './ViewSubmission';
const axios = require('axios');

class Submission extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
    }
  
    callAPI(){
      fetch("http://localhost:9000/astable")
        .then(res=> res.json())
        .then(res => this.setState({apiResponse:res}));
    }
  
    componentWillMount(){
      this.callAPI();
    }

    componentDidMount(){
      $("#loader").fadeOut();
    }
  
    handleSearch(){
      const url = "http://localhost:9000/astable?search="+$("#search").val();

      axios.get(url)
        .then(res => this.setState({apiResponse:res.data}));
     
      if(!$("#clearBtn").is(":visible")){
        $("#clearBtn").fadeIn();
      }
        
    }

    clearTable(){
      $("#search").val("");
      this.handleSearch();
      $("#clearBtn").fadeOut();
    }

    handleDelete(event){
      event.target.innerHTML = '<i class="fa fa-circle-o-notch fa-spin del-pad"></i>';
    
      const url = "http://localhost:9000/delas?assID="+event.target.value;

      axios.get(url)
        .then(response => {
          //alert(response.data);
          
          if(response.data == "1"){
            setTimeout(() => {
              this.clearTable();
            },500);
          }
          event.target.innerHTML = 'Delete';

      })
      .catch(error => {
          alert("e - " + error);
      })
    }

    render(){
      var ResData = this.state.apiResponse;
      //console.log(ResData);
      var columnNum = 1;

      $("#sub_nav").addClass("active-page"); 

      return(
        
        <div className="row">

        <Helmet>
          <title>Submissions</title>
        </Helmet>

        <div className="col-lg-1"></div>
        <div className="col-lg-10">

            <a href="../addassignment"><button className="btn btn-warning">Add Assignment <i className="fa fa-plus"></i></button></a>

            <div className="text-center search">
                <input type="text" name="search" id="search" placeholder="Search By Title..." /><button type="submit" name="ssbt" onClick={(e) => this.handleSearch()} className="bg-theme-col"><i className="fa fa-search"></i></button> 
                <br/><button className="btn-clear" id="clearBtn" onClick={(e) => this.clearTable()}><i class="fa fa-trash"></i></button>
            </div>

            <label className="table-name">All Assignments</label>
            <table className="table table-hover">
                <thead className="bg-theme-col">
                  <tr>
                    <th>#</th>
                    <th>Posted Date</th>
                    <th>Title</th>
                    <th>Deadline</th>
                    <th>Control</th>
                  </tr>
                </thead>
                <tbody>

        {ResData.map((data) => {
            return(
                      <tr>
                        <td>{columnNum++}</td>
                        <td>{data.date}</td>
                        <td>{data.title}</td>
                        <td>{data.deadline.substr(0,10)}</td>
                        <td><a href={"../viewsubmission/" + data.assID}><button className="btn btn-info">View Submissions <i className="fa fa-arrow-right"></i></button></a></td>
                      </tr>
            )
        })}

                    </tbody>
                  </table>
    
            </div>
            <div className="col-lg-1"></div>
        </div>

      )  
    }
    
}

export default Submission;