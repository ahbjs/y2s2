import React from 'react';
import './assets/css/form.css';
import $ from 'jquery';
import { Helmet } from 'react-helmet'

class Add_assignment extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[],file:''};
    }
  
    callAPI(){
      /*fetch("http://localhost:9000/astable")
        .then(res=> res.json())
        .then(res => this.setState({apiResponse:res}));*/
    }
  
    componentWillMount(){
      this.callAPI();
    }

    componentDidMount(){
        $("#loader").fadeOut();
    }

    handleFile(e){
        this.state.file = e.target.files[0];
        $("#fname").fadeIn().html(e.target.files[0].name);
    }

    handleSubmit(event){
        event.preventDefault();
        let fileInput = this.state.file;

        const formData = new FormData(event.target);

        /*const data = {
            title: formData.get('title'),
            description: formData.get('description'),
            file: fileInput,
            deadline: formData.get('ddate')
        };*/
        const data = new FormData();
        data.append("title", formData.get('title'));
        data.append("description", formData.get('description'));
        data.append("file", fileInput);
        data.append("deadline", formData.get('ddate'));
        

        const config = {
            headers: {'content-type' : 'multipart/form-data'},
            onUploadProgress: function(progressEvent){
                var completed = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                
                $("#progDiv").fadeIn();
                $("#prog").html(completed+"%");
                $("#prog").width(completed+"%");
            }
        }
        const axios = require('axios');

        const url = "http://localhost:9000/addas";

        axios.post(url , data, config)
            .then(response => {
                //alert(response.data);
                $("#progDiv").fadeOut();
                
                if(response.data == "1"){
                    $("#msgDiv").addClass("alert-success");
                    $("#msg").html = "Assignment has been added!";
                }else{
                    $("#msgDiv").addClass("alert-warning");
                    $("#msg").html = "Cannot add assignment!";
                }

                $("#msgDiv").fadeIn();

                console.log(response);
            })
            .catch(error => {
                alert("e - " + error);
            })

    }
  
    render(){

      var ResData = this.state.apiResponse;

      return(
        <div className="row">

        <Helmet>
          <title>Add Assignment</title>
        </Helmet>

            <div className="col-lg-2"></div>
            <div className="col-lg-8 assForm">

                <a href="../assignment">
                    <button className="btn btn-warning"><i className="fa fa-arrow-left"> Assignments</i></button>
                </a><br/><br/>


                <form method="GET" onSubmit={(e) => this.handleSubmit(e)}>

                    <fieldset>
                        
                        <legend>Add Assignment</legend>

                        <div>
                            <label className="f-label">Title</label><br/>
                            <textarea name="title" className="theme-border" placeholder="Enter the Title..." required></textarea>
                        </div>
                        
                        <div>
                            <label className="f-label">Description</label><br/>
                            <textarea name="description" className="theme-border" placeholder="Enter the Description..." required></textarea>
                        </div>

                        <label className="f-label">File</label>
                        <div className="text-center w-100 theme-border" style={{padding:"20px"}}>
                            <label for="file" className="file-select"> <i className="fa fa-file"></i> Select</label>
                            <input type="file" name="file" id="file" onChange={(e)=>this.handleFile(e)} style={{display:"none"}} required />
                            <p id="fname"></p>
                        </div>

                        <label className="f-label">Deadline</label>
                        <div className="text-center w-100 theme-border">
                            <input type="date" className="date-select" name="ddate" required />
                        </div>

                        <div class="progress" id="progDiv">
                            <div class="progress-bar progress-bar-info" id="prog" role="progressbar" aria-valuenow="0"
                            aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}}>
                                0%
                            </div>
                        </div>

                        <div className="alert" id="msgDiv">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong id="msg">Assignment has been added!</strong>
                        </div>

                        <button type="submit" name="submit" className="u-btn"><i className="fa fa-upload"></i> Upload</button>

                    </fieldset>
                </form>

            </div>
            <div className="col-lg-2"></div>
        </div>
      )  
    }
    
}

export default Add_assignment;