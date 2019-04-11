import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
import styles from '../css/App.css';

export default class App extends React.Component {
constructor() {
    super();
  this.state = {data: []};
    this.getData = this.getData.bind(this);
  }

componentDidMount(){
    this.getData(this);
  }

getData(ev){
    axios.get('http://localhost:8080/clientes')
      .then(function(response) {
        console.log('teste' + response.data[0].endereco);
        ev.setState({data: response.data});
        //ev.setState({selectedYear: parseInt(year)});
//ev.setState({selectedMonth: month});
      });


  }
render() {
    return (
      <div>
    

        <table>
          <thead>
            <tr><th></th><th className='desc-col'>Nome</th><th className='button-col'>CPF</th><th className='button-col'>Telefone</th><th className='button-col'>Endereco</th></tr>
          </thead>
          <tbody>
            {
              this.state.data.map((exp) => {
                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.nome}</td><td className='button-col'>{exp.cpf}</td><td className='button-col'>{exp.telefone}</td><td className='button-col'>{exp.endereco}</td></tr>
              })
            }
            </tbody>
</table>
      </div>
    );
  }
}
