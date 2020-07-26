import React from 'react';

class Contactbody extends React.Component{

  constructor(props) {
    super(props);
    this.state = {from: '', subject: '', message: '', contactsubmissions: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (localStorage.getItem("submissions") != null && localStorage.getItem("submissions").length > 0) {
       this.state = {contactsubmissions : JSON.parse(localStorage.getItem("submissions"))};
    }
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {
    event.preventDefault();
    let contactsubmission = {from: this.state.from, subject: this.state.subject, message: this.state.message};
      if((this.state.from == "" && this.state.subject != ""  && this.state.message != "")||(this.state.from == undefined && this.state.subject != undefined  && this.state.message != undefined)) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'From' field!";
        document.getElementById("innerhtml-2").innerHTML = "";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if((this.state.subject == "" && this.state.from != "" && this.state.message != "") || (this.state.subject == undefined && this.state.from != undefined && this.state.message != undefined)) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'Subject' field!";
        document.getElementById("innerhtml-2").innerHTML = "";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if((this.state.message == "" && this.state.from != "" && this.state.subject != "") || (this.state.message == undefined && this.state.from != undefined && this.state.subject != undefined)) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'Message' field!";
        document.getElementById("innerhtml-2").innerHTML = "";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if((this.state.from == "" && this.state.subject == "" && this.state.message != "") || (this.state.from == undefined && this.state.subject == undefined && this.state.message != undefined)) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'From' field!";
        document.getElementById("innerhtml-2").innerHTML = "*Please enter your name in the 'Subject' field!";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if((this.state.from != "" && this.state.subject == "" && this.state.message == "") || (this.state.from != undefined && this.state.subject == undefined && this.state.message == undefined)) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'Subject' field!";
        document.getElementById("innerhtml-2").innerHTML = "*Please enter your name in the 'Message' field!";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if((this.state.from == "" && this.state.subject != "" && this.state.message == "") || (this.state.from == undefined && this.state.subject != undefined && this.state.message == undefined)) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'From' field!";
        document.getElementById("innerhtml-2").innerHTML = "*Please enter your name in the 'Message' field!";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if((this.state.from == undefined && this.state.subject == undefined && this.state.message == undefined) || (this.state.from == "" && this.state.subject == "" && this.state.message == "")) {
        document.getElementById("innerhtml-1").innerHTML = "*Please enter your name in the 'From' field!";
        document.getElementById("innerhtml-2").innerHTML = "*Please enter your name in the 'Subject' field!";
        document.getElementById("innerhtml-3").innerHTML = "*Please enter your name in the 'Message' field!";
        document.getElementById("spacer").innerHTML = "-<br>-";
      }
      else if(this.state.from != '' && this.state.subject != '' && this.state.message != '' && this.state != {} && this.state != null && this.state.from != null && this.state.subject != null && this.state.message != null) {
        document.getElementById("innerhtml-1").innerHTML = "Your message has been sent!";
        document.getElementById("innerhtml-2").innerHTML = "";
        document.getElementById("innerhtml-3").innerHTML = "";
        document.getElementById("spacer").innerHTML = "-<br>-";
        this.setState({contactsubmissions: this.state.contactsubmissions.concat(contactsubmission)});
        localStorage.setItem("submissions", JSON.stringify(this.state.contactsubmissions.concat(contactsubmission)))
      }
        this.setState({from: '', subject: '', message: ''});
    }

  render() {

  return (
    <React.Fragment>
    <div className="ml-5 mr-5 mb-5 w-100 h-100">

      <div id="innerhtml-1" className="ml-5">
      <p></p>
      </div>
      <div id="innerhtml-2" className="ml-5">
      <p></p>
      </div>
      <div id="innerhtml-3" className="ml-5">
      <p></p>
      </div>
      <div id="spacer" className="ml-5">
      <p></p>
      </div>

      <div className="attention-catcher-about ml-5">
        <p>Contact Us</p>
      </div>

      <div className="attention-catcher-body-about font-italic ml-5 mt-5"><p>Phone</p></div>
      <p className="ml-5 mr-5">510-111-2345</p>

      <div className="ml-5">
        <div className="attention-catcher-body-about font-italic mt-5"><p>Contact Form</p></div>

        <form onSubmit={this.handleSubmit}>
          From <br/>
          <textarea onChange={this.handleChange} value={this.state.from} rows="1" cols="20" name="from"></textarea><br/><br/>
          Subject <br/>
          <textarea onChange={this.handleChange} value={this.state.subject} rows="1" cols="20" name="subject"></textarea><br/><br/>
          Message <br/>
          <textarea onChange={this.handleChange} value={this.state.message} rows="4" cols="50" name="message"></textarea><br/><br/>
          <input type="submit"/>
        </form>
      </div>
    </div>
    </React.Fragment>
  );

}
}

export default Contactbody;
