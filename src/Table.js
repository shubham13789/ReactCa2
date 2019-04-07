import React, { Component } from 'react';



class Table extends Component{

    constructor(props) {
        super(props);
        this.state = {
            
    }
}


    

    render(){
        let books= this.props.state;
        return(
            <React.Fragment>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Sr no </th>
                    <th scope="col">Name</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Author</th>
                    </tr>
                </thead>
                <tbody>
                {
                    books.map(function(book,index){
                        return(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{book.name}</td>
                            <td>{book.isbn}</td>
                            <td>{book.author}</td>
                        </tr>                           
                        );
                    })
                }
                </tbody>
            </table>
            </React.Fragment>
            )
        }



}
export default Table;