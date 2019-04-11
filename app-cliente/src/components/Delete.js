import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Delete extends React.Component {
constructor(){
  super();
  this.state={id: '', cpf: '', telefone: '', endereco:''};
  this.onClick = this.onClick.bind(this);
  this.delete = this.delete.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.cliente.id,
      cpf: this.props.cliente.cpf,
      telefone: this.props.cliente.telefone,
      endereco: this.props.cliente.endereco
    })
  }
componentWillReceiveProps(nextProps){
  this.setState({
    id: nextProps.cliente.id,
    cpf:nextProps.cliente.cpf,
    telefone:nextProps.cliente.telefone,
    endereco:nextProps.cliente.endereco
  })
  }
onClick(e){
     this.delete(this);
    }
delete(e){
    axios.delete('http://localhost:8080/delete-cliente/' + e.state.id)
      .then(function(response) {
});
}
render(){
  return (
    <Button bsStyle="danger" bsSize="small" onClick={this.onClick}>
     <Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year}} style={{ textDecoration: 'none' }}>
                  <span className="glyphicon glyphicon-remove"></span>
         </Link>
    </Button>
)
 }
}
export default Delete;
