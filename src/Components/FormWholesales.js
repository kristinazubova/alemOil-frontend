import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import './../App.css';

export default class FormWholesales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exportWay: {
        isOilBase: false,
      },
      formItems: {
        companyName: '',
        productType: '',
        productVolume: '',
        lawAdress: '',
        companyBIN: '',
        companyIIK: '',
        companyBIK: '',
        companyKBE: '',
        bankName: '',
        exportType: '',
        targetExport: '',
        email: '',
        phoneNum: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState((state) => {
      
      if (target.type === 'radio') {
        if (target.id === 'oilBase') {
          value = 'Наливом с нефтебазы'
          state.formItems.targetExport = 'Для реализации конечному потребителю'
        }
        else {
          value = 'Талоны для АЗС'
          state.formItems.targetExport = ''
        }
      }

      state.formItems[name] = value;

      return state
    });
  }

  render() {
    let formItems = this.state.formItems;

    const sendForm = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/questionaries', {
       
      })
    }

    return (
      <Form className="border p-3 my-3">
        <h4 className="text-center p-3">Форма заявки на оптовую закупку</h4>

        <Form.Row>
          <Form.Group as={Col} xs={12} md={7}>
            <Form.Label>Выберите тип нефтепродукта</Form.Label>
            <Form.Control
              as="select"
              name="productType"
              value={this.state.productType}
              onChange={this.handleInputChange}
            >
              <option>АИ-92</option>
              <option>АИ-95</option>
              <option>ДТ(летнее)</option>
              <option>ДТ(зимнее)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={5}>
            <Form.Label>Объём в литрах</Form.Label>
            <Form.Control
              xs={12}
              name="productVolume"
              value={this.state.productVolume}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <h5 className="text-center p-3">Заполните реквизиты компании для выставления счета</h5>

        <Form.Group controlId="formCompanyName">
          <Form.Label>Название компании</Form.Label>
          <Form.Control
            placeholder="ИП Иванов И.И"
            name="companyName"
            value={this.state.companyName}
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formCompanyAddress">
          <Form.Label>Юридический адрес</Form.Label>
          <Form.Control
            name="lawAdress"
            placeholder="001234, Казахстан, Восточно-Казахстанская обл., Зыряновский район"
            value={this.state.lawAdress}
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="formBIN" as={Col} xs={12} md={4}>
            <Form.Label>БИН</Form.Label>
            <Form.Control
              name="companyBIN"
              value={this.state.companyBIN}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formIIK" as={Col} xs={12} md={4}>
            <Form.Label>ИИК</Form.Label>
            <Form.Control
              name="companyIIK"
              value={this.state.companyIIK}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBIK" as={Col} xs={12} md={4}>
            <Form.Label>БИК</Form.Label>
            <Form.Control
              name="companyBIK"
              value={this.state.companyBIK}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form.Row>


        <Form.Row>
          <Form.Group as={Col} xs={12} md={3} controlId="formKBE">
            <Form.Label>КБе</Form.Label>
            <Form.Control
              name="companyKBE"
              value={this.state.companyKBE}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={9} controlId="formBankName">
            <Form.Label>Наименование банка</Form.Label>
            <Form.Control
              name="bankName"
              value={this.state.bankName}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group className="border p-3">
          <Form.Group id="formExport" >
            <div className="mb-2">Выберите способ вывоза:</div>
            <Form.Check
              inline
              type="radio"
              label="Наливом с нефтебазы"
              name="exportType"
              id="oilBase"
              onChange={this.handleInputChange}
            />
            <Form.Check
              inline
              type="radio"
              label="Талоны для АЗС"
              name="exportType"
              id="oilStations"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          {
            this.state.formItems.exportType === "Наливом с нефтебазы" ?
              <Form.Group as={Col} controlId="formOilbase" xs={12} md={7} className="px-0" id="targetExport">
                <Form.Label>Выберите цель покупки</Form.Label>
                <Form.Control as="select" name="targetExport" value={this.state.targetExport} onChange={this.handleInputChange}>
                  <option>Для реализации конечному потребителю</option>
                  <option>Перепродажа розничному реализатору</option>
                </Form.Control>
              </Form.Group>
              : null
          }
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="ivanov@email.com"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleInputChange}
              placeholder="+7777-123-45-67"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-flex justify-content-center">
          <Button type="submit" className="btn-orange" onClick={sendForm}>
            Отправить
        </Button>
        </Form.Row>
      </Form>
    )
  }
}
