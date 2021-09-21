import React from 'react';
import $ from 'jquery';

class T_Home extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
    }
  
    callAPI(){
      fetch("http://localhost:9000/thome")
        .then(res => res.json())
        .then(res => this.setState({apiResponse:res}));
    }
  
    componentWillMount(){
      this.callAPI();
    }

    componentDidMount(){
      $("#loader").fadeOut();
    }

    popAnimation(id,status){

      if(status == 1){
        $(id).find("#title").css("font-size","20px");
        $(id).find("#count").css("font-size","30px");
      }else{
        $(id).find("#title").css("font-size","18px");
        $(id).find("#count").css("font-size","28px");      }
    }
  
    render(){

      var ResData = this.state.apiResponse;
      $("#t_home_nav").addClass("active-page"); 

      return(
        ResData.map((data,index) => {
          return(
            <div className="row" style={{padding: "0px 150px"}}>
        
            <div className="col-lg-6 card-main" id="student" onMouseEnter={(e) => this.popAnimation("#student",1)} onMouseLeave={(e) => this.popAnimation("#student",0)}>
              <div className="row">
                  
                  <div className="col-lg-4 card-icon">
                    <i className="fa fa-user"></i>
                  </div>
      
                  <div className="col-lg-8 text-center">
                    <p className="card-title" id="title">Students</p> 
                    <p className="card-count" id="count">{data.student}</p>
                  </div>
      
              </div>
            </div>
    
            <div className="col-lg-6 card-main" id="assignment" onMouseEnter={(e) => this.popAnimation("#assignment",1)} onMouseLeave={(e) => this.popAnimation("#assignment",0)}>
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-book"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title" id="title">Assignments</p> 
                  <p className="card-count" id="count">{data.assignment}</p>
                </div>
    
            </div>
            </div>
    
            <div className="col-lg-6 card-main" id="announcement" onMouseEnter={(e) => this.popAnimation("#announcement",1)} onMouseLeave={(e) => this.popAnimation("#announcement",0)}>
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-bullhorn"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title" id="title">Announcements</p> 
                  <p className="card-count" id="count">{data.announcement}</p>
                </div>
    
            </div>
            </div>
    
            <div className="col-lg-6 card-main" id="submission" onMouseEnter={(e) => this.popAnimation("#submission",1)} onMouseLeave={(e) => this.popAnimation("#submission",0)}>
            <div className="row">
                
                <div className="col-lg-4 card-icon">
                  <i className="fa fa-bookmark"></i>
                </div>
    
                <div className="col-lg-8 text-center">
                  <p className="card-title" id="title">Submissions</p> 
                  <p className="card-count" id="count">{data.submission}</p>
                </div>
    
            </div>
            </div>
            
        </div>
          )
        })
      )  
      /*return (
        <div className="row" style={{padding: "0px 150px"}}>
        
        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-user"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Students</p> 
            <p className="card-count">{data[0].student}</p>
            </div>

        </div>
        </div>

        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-book"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Assignments</p> 
            <p className="card-count">239</p>
            </div>

        </div>
        </div>

        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-bullhorn"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Announcements</p> 
            <p className="card-count">239</p>
            </div>

        </div>
        </div>

        <div className="col-lg-6 card-main">
        <div className="row">
            
            <div className="col-lg-4 card-icon">
            <i className="fa fa-bookmark"></i>
            </div>

            <div className="col-lg-8 text-center">
            <p className="card-title">Submissions</p> 
            <p className="card-count">239</p>
            </div>

        </div>
        </div>
        
    </div>
      );*/
    }
    
}

export default T_Home;