import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'; 
import Modal from 'react-bootstrap/Modal';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = { 
                author:"",
                name:"",
                isbn:"",
            };
         

         this.handleChange = this.handleChange.bind(this);
         this.handleClick = this.handleClick.bind(this);
         

    }

    handleChange(e){
    
    
    this.setState({[e.target.name] :e.target.value})

    }
    handleClick(){
       this.props.submit(this.state)
       this.setState({
            author:"",
            name:"",
            isbn:"",
       })
    }
   
    render() { 
        return ( 
            <React.Fragment>
                <div>
                   
                    <center> <Button className="btn-success btn-lg" onClick={this.props.modal}>Create</Button></center>
                </div>

                 <Modal show={this.props.show} onHide={this.props.modal}>
                        <Modal.Header closeButton>
                            <Modal.Title className="thead-dark">Book Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <p>Name</p>
                                <input  name="name" onChange={this.handleChange} value={this.state.name} className="form-control"></input>
                            </div>
                            <div className="row">
                                <p>Author</p>
                                <input  name="author" onChange={this.handleChange} value={this.state.author} className="form-control"></input>
                            </div>
                            <div className="row">
                                <p>ISBN</p>
                                <input name="isbn" onChange={this.handleChange} value={this.state.isbn} className="form-control"></input>
                            </div>

                        </div>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClick}>
                            Submit
                            </Button>
                            <Button variant="secondary" onClick={this.props.modal}>
                            Close
                            </Button>
                        </Modal.Footer>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default Form ;