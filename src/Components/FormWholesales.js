import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import config from './../Config/index'

import './../App.css';

export default class FormWholesales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [{
        label: 'Бензин АИ-92',
        id: 'petrol92',
        isEnabled: true,
        volume: ''
      },
      {
        label: 'Бензин АИ-95',
        id: 'petrol95',
        isEnabled: false,
        volume: ''
      },
      {
        label: 'Диз. топливо летнее',
        id: 'dieselSummer',
        isEnabled: false,
        volume: ''
      },
      {
        label: 'Диз. топливо зимнее',
        id: 'dieselWinter',
        isEnabled: false,
        volume: ''
      }],
      formItems: {
        companyName: '',
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
      },
      validated: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState((state) => {
      if (name === 'exportType') {
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

  toggleCheckbox(index) {
    let products = this.state.products;
    products[index].isEnabled = !products[index].isEnabled

    this.setState({
      products
    })
  }

  handleVolumeChange(index, event) {
    const target = event.target;

    let products = this.state.products;
    products[index].volume = target.value;

    this.setState({
      products
    })
  }

  render() {
    let products = this.state.products;
    let formItems = this.state.formItems;

    const sendForm = (e) => {

      let order = products.map((product) => ({
        productName: product.label,
        productVolume: product.volume
      }))

      axios.post(`${config.backendURL}/questionaries`, { ...formItems, order })
        .then(res => {
          console.log(res)
          alert('Заявка успешно отправлена! Менеджер свяжется с вами в ближайшее время!')
        }).catch(err => {
          alert('Ошибка! Заявка не отправлена!')
        })

    }


    const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();

        this.setState({
          validated: true
        });
      } else {
        sendForm();
      }
    };

    const productsList = products.map((product, index) =>
      <Form.Row key={product.id} className="p-2 align-items-center">
        <Form.Group as={Col} xs={6} md={4} lg={3} className="m-0">
          <Form.Check
            type="checkbox"
            label={product.label}
            name="order"
            id={product.id + 'Checkbox'}
            checked={product.isEnabled}
            onChange={(e) => this.toggleCheckbox(index, e)}
          >
          </Form.Check>
        </Form.Group>
        <Form.Group as={Col} xs={6} md={8} lg={9} className="m-0">
          <Form.Control
            type="number"
            xs={6}
            name="productVolume"
            id={product.id}
            value={product.volume}
            onChange={(e) => this.handleVolumeChange(index, e)}
            disabled={!product.isEnabled}
            placeholder="Объем в литрах"
            className="m-0 px-1 text-center"
            required
          />
        </Form.Group>
      </Form.Row>
    )

    return (
      <Form noValidate validated={this.state.validated} onSubmit={handleSubmit} className="border p-3 my-5">
        <h3 className="text-center p-3">Форма заявки на оптовую закупку</h3>
        <h5 className="text-center">Выберите тип продукта и укажите объём</h5>
        {productsList}
        <h5 className="text-center p-3">Заполните реквизиты компании для выставления счета</h5>

        <Form.Group controlId="formCompanyName">
          <Form.Label>Название компании*</Form.Label>
          <Form.Control
            placeholder="ИП Иванов И.И"
            name="companyName"
            value={this.state.companyName}
            onChange={this.handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCompanyAddress">
          <Form.Label>Юридический адрес*</Form.Label>
          <Form.Control
            name="lawAdress"
            placeholder="001234, Казахстан, Восточно-Казахстанская обл., район Алтай, г. Алтай, ул. Тәуелсіздік, 3"
            value={this.state.lawAdress}
            onChange={this.handleInputChange}
            required
          />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="formBIN" as={Col} xs={12} md={4}>
            <Form.Label>БИН*</Form.Label>
            <Form.Control
              name="companyBIN"
              value={this.state.companyBIN}
              onChange={this.handleInputChange}
              required
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
            <Form.Label>КБе*</Form.Label>
            <Form.Control
              name="companyKBE"
              value={this.state.companyKBE}
              onChange={this.handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={9} controlId="formBankName">
            <Form.Label>Наименование банка*</Form.Label>
            <Form.Control
              name="bankName"
              value={this.state.bankName}
              onChange={this.handleInputChange}
              required
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
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="ivanov@email.com"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Номер телефона*</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleInputChange}
              placeholder="+7777-123-45-67"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-flex justify-content-center">
          <Button type="submit" className="btn-orange my-4">
            Отправить
        </Button>
        </Form.Row>
      </Form>
    )
  }
}
