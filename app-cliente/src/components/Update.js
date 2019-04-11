import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var querystring = require('querystring');
class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      nome: '',
      cpf: '',
      telefone: '',
      endereco: '',
      messageFromServer: '',
      modalIsOpen: false
    }
this.update = this.update.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.cliente.id,
      nome: this.props.cliente.nome,
      cpf: this.props.cliente.cpf,
      telefone: this.props.cliente.telefone,
      endereco: this.props.cliente.endereco
    });
  }
componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.cliente.id,
      nome: nextProps.cliente.nome,
      cpf:nextProps.cliente.cpf,
      tefone:nextProps.cliente.telefone,
      endereco:nextProps.cliente.endereco
    })
  }
openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
closeModal() {
    this.setState({
      modalIsOpen: false,
      messageFromServer: ''
    });
  }
handleSelectChange(e) {
    if (e.target.name == "month") {
      this.setState({
        month: e.target.value
      });
    }
    if (e.target.name == "year") {
      this.setState({
        year: e.target.value
      });
    }
  }
handleTextChange(e) {
    if (e.target.name == "nome") {
      this.setState({
        nome: e.target.value
      });
    }
   if (e.target.name == "cpf") {
      this.setState({
      cpf: e.target.value
      });
    }
    if (e.target.name == "telefone") {
      this.setState({
      telefone: e.target.value
      });
    }
    if (e.target.name == "endereco") {
      this.setState({
      endereco: e.target.value
      });
    }
  }
onClick(e) {
    this.update(this);
  }
update(e) {
    var cliente = {
      id: e.state.id,
      nome: e.state.nome,
      cpf: e.state.cpf,
      telefone: e.state.telefone,
      endereco: e.state.endereco
    }
    
    axios.post('http://localhost:8080/update-cliente', cliente).then(function(response) {
      e.setState({
        messageFromServer: response.data
      });
});
  }
render() {
    if(this.state.messageFromServer == ''){
      return (
        <div>
          <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
            className="Modal">
<Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year }} style={{ textDecoration: 'none' }}>
            <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
          </Link><br/>
<fieldset>
            <label for="nome">Nome:</label><input type="text" id="nome" name="nome" value={this.state.nome} onChange={this.handleTextChange}></input>
            <label for="cpf">Cpf:</label><input type="text" id="text" name="cpf" value={this.state.cpf} onChange={this.handleTextChange}></input>
            <label for="Telefone">Telefone:</label><input type="text" id="text" name="telefone" value={this.state.telefone} onChange={this.handleTextChange}></input>
            <label for="Endereco">Endereco:</label><input type="text" id="text" name="endereco" value={this.state.endereco} onChange={this.handleTextChange}></input>
          </fieldset>
<div className='button-center'>
              <br/>
              <Button bsStyle="warning" bsSize="small" onClick={this.onClick}>Update</Button>
            </div>
          </Modal>
        </div>
      )
    }
    else{
      return (
        <div>
         <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Add Expense"
           className="Modal">
<div className='button-center'>
              <h3>{this.state.messageFromServer}</h3>
              <Link to={{pathname: '/', search: '?month='+this.state.month+'&year='+this.state.year}} style={{ textDecoration: 'none' }}>
                <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
              </Link>
            </div>
          </Modal>
        </div>
        )
      }
  }
}
export default Update;
