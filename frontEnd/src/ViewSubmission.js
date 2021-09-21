import React from 'react';
import './assets/css/assignment.css';
import $ from 'jquery';
import { Helmet } from 'react-helmet'
const axios = require('axios');

class ViewSubmission extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
      this.input = React.createRef();
    }
  
    callAPI(){
      fetch("http://localhost:9000/viewsubmission?assID="+this.props.match.params.id)
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
      const url = "http://localhost:9000/viewsubmission?search="+$("#search").val()+"&assID="+this.props.match.params.id;

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

    addMark(event){
      event.preventDefault();
      event.target.innerHTML = '<i class="fa fa-circle-o-notch fa-spin del-pad"></i>';

      const url = "http://localhost:9000/addMark?" + event.target.value;

      axios.get(url)
        .then(response => {
          //alert(response.data);
          
          if(response.data == "1"){
            $("#msg").fadeIn().delay(1500).fadeOut();
            setTimeout(() => {
              this.clearTable();
            },500);
          }
          event.target.innerHTML = 'Add';

      })
      .catch(error => {
          alert("e - " + error);
      })
    }

    setMarks(e,id){
        $("#"+id).val("sid="+id+"&marks="+e.target.value);
    }

    render(){
      var ResData = this.state.apiResponse;
      console.log(ResData);

      var columnNum = 1;

      return(
        
        <div className="row">

        <Helmet>
          <title>Submissions</title>
        </Helmet>

        <div className="col-lg-1"></div>
        <div className="col-lg-10">

            <a href="../submission" className="float-left"><button className="btn btn-warning"><i className="fa fa-arrow-left"></i> All Assignment</button></a>
            <a href={"http://localhost:9000/genAsReport?assID=" + this.props.match.params.id}><button className="btn btn-success" style={{float:"right"}}>Generate a Report <i className="fa fa-file"></i></button></a>

            <div className="text-center search">
                <input type="text" name="search" id="search" placeholder="Search By Student Name..." /><button type="submit" name="ssbt" onClick={(e) => this.handleSearch()} className="bg-theme-col"><i className="fa fa-search"></i></button> 
                <br/><button className="btn-clear" id="clearBtn" onClick={(e) => this.clearTable()}><i class="fa fa-trash"></i></button>
            </div>

            <div className="text-center" id="msg" hidden>
                <div class="alert alert-success alert-dismissible">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Marks Updated!</strong> 
                </div>
            </div>

            <label className="table-name"><i class="fa fa-book"></i> Submissions</label>
            <table className="table table-hover">
                <thead className="bg-theme-col">
                  <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Student Name</th>
                    <th>Submission</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>

        {ResData.map((data) => {
            
            if(data.marks == -1){
                data.marks = "";
            }

            return(
                      <tr>
                        <td>{columnNum++}</td>
                        <td>{data.date}</td>
                        <td>{data.fname} {data.lname}</td>
                        <td><a href={"http://localhost:9000/download?fileType=s&id=" + data.sid} target="_blank" download><button type="button" className="btn btn-primary">Download</button></a></td>
                        <td><form method="GET"><input className="mark-in" type="number" defaultValue={data.marks} name="marks" min="0" max="100" onChange={(e) => this.setMarks(e,data.sid)} ref={this.input} placeholder="Enter Marks"/><button type="submit" onClick={(e) => this.addMark(e)} name={data.sid} id={data.sid} value={data.sid} className="mark-btn">Add</button></form></td>
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

export default ViewSubmission;