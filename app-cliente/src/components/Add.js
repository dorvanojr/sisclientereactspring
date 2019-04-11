import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
        nome: '',
        cpf: '',
        telefone: '',
        endereco: '',
        messageFromServer: '',
        modalIsOpen: false
      }

      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewExpense = this.insertNewExpense.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        nome: '',
        cpf: '',
        telefone: '',
        endereco: '',
        messageFromServer: ''
      });
    }

onClick(e) {
      this.insertNewExpense(this);
    }
insertNewExpense(e) {
    var cliente = {
      nome: e.state.nome,
      cpf: e.state.cpf,
      telefone: e.state.telefone,
      endereco: e.state.endereco
    }
      axios.post('http://localhost:8080/salvar-cliente', cliente).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
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
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}>Cadastro</Button>
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
       <label for="cpf">Cpf:</label><input type="text" id="cpf" name="cpf" value={this.state.cpf} onChange={this.handleTextChange}></input>
       <label for="telefone">telefone:</label><input type="text" id="telefone" name="telefone" value={this.state.telefone} onChange={this.handleTextChange}></input>
       <label for="endereco">endereco:</label><input type="text" id="endereco" name="endereco" value={this.state.endereco} onChange={this.handleTextChange}></input>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>salvar</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
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
export default Add;
