import React from 'react';
import { FormInputData } from "./components/FormInputData";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      gender: '',
      agama: '',
      msg: '',
      hobi: []
    }

    this.changeNameValue = this.changeNameValue.bind(this);
    this.changeDateValue = this.changeDateValue.bind(this);
    this.changeGenderValue = this.changeGenderValue.bind(this);
    this.changeAgamaValue = this.changeAgamaValue.bind(this);
    this.changeMsgValue = this.changeMsgValue.bind(this);
    this.changeHobiValue = this.changeHobiValue.bind(this);
  }

  changeNameValue(e) {
    this.setState((state, props) => ({
      name: e.target.value,
    }))
  }

  changeDateValue(e) {
    this.setState((state, props) => ({
      date: e.target.value,
    }))
  }

  changeGenderValue(e) {
    this.setState((state, props) => ({
      gender: e.target.value,
    }))
  }

  changeAgamaValue(e) {
    this.setState((state, props) => ({
      agama: e.target.value,
    }))
  }

  changeMsgValue(e) {
    this.setState((state, props) => ({
      msg: e.target.value,
    }))
  }

  changeHobiValue(e) {
    if(e.target.checked){
    this.setState((state, props) => ({
      hobi: [this.hobi, e.target.value],
    }))
    }
  }

  
  render() {
    return(
      <div>
        <FormInputData 
          dataNama = {this.state.name}
          dataDate = {this.state.date}
          dataGender = {this.state.gender}
          dataAgama = {this.state.agama}
          dataMsg = {this.state.msg}
          dataHobi = {this.state.hobi}
          eventChangeName = {this.changeNameValue}
          eventChangeDate = {this.changeDateValue}
          eventChangeGender = {this.changeGenderValue}
          eventChangeAgama = {this.changeAgamaValue}
          eventChangeMsg = {this.changeMsgValue}
          eventChangeHobi = {this.changeHobiValue}
        />
      </div>
    )
  }
}