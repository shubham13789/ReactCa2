import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Navbar from './Navbar';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
            bookdata:[],
            
            show:false,

            length:0,



     }

     this.submit=this.submit.bind(this);
     this.Modal=this.Modal.bind(this);
  }


  Modal() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }


  componentDidMount(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','http://localhost:8080/');
    xmlhttp.send();
    xmlhttp.onload = function(){
        let serverData = xmlhttp.responseText;
        let data =JSON.parse(serverData);
        console.log(data)
        this.setState({bookdata:data});
        this.setState({length:data.length})
    }.bind(this);
}

// componentDidUpdate(){
//   let xmlhttp = new XMLHttpRequest();
//     xmlhttp.open('GET','http://localhost:8080/');
//     xmlhttp.send();
//     xmlhttp.onload = function(){
//         let serverData = xmlhttp.responseText;
//         let data =JSON.parse(serverData);
//         console.log(data)
//         this.setState({bookdata:data});
//         this.setState({length:data.length})
//     }.bind(this);

// }

  submit(book){
    
    let xmlhttp = new XMLHttpRequest();
    let tempbook= [...this.state.bookdata];
    xmlhttp.open('POST','http://localhost:8080/');
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(book));
    console.log(book);
    this.setState({show:false,
    });
    tempbook.push(book);
    this.setState({bookdata:tempbook});
    let len = this.state.length;
    len++;
    this.setState({length:len});

  }

  render() { 
    return (  
      <>
        <div>
            <Navbar length={this.state.length}/>
        </div>
        <br></br>
        <div>
            <Form  submit={this.submit} show={this.state.show} modal={this.Modal}/>
        </div>
        <br></br>
        <div>
            <Table state={this.state.bookdata} />
        </div>


      </>
    );
  }
}
 
export default App;