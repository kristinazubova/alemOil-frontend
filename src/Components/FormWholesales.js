import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './../App.css';


export default class FormWholesales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exportWay: {
        isOilBase: false,
      }
    }
  }



  render() {
    const { isOilBase } = this.state.exportWay;

    const handleClick = () => {
      this.setState({
        exportWay: {
          isOilBase: !isOilBase,
        }
      })
    }

    return (
      <Form className="border p-3 my-3">
        <h4 className="text-center p-3">Форма заявки на оптовую закупку</h4>

        <Form.Row>
          <Form.Group as={Col} controlId="formOilName" xs={12} md={7}>
            <Form.Label>Выберите тип нефтепродукта</Form.Label>
            <Form.Control as="select" >
              <option>АИ-92</option>
              <option>АИ-95</option>
              <option>ДТ(летнее)</option>
              <option>ДТ(зимнее)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={5}>
            <Form.Label>Объём в литрах</Form.Label>
            <Form.Control xs={12} />
          </Form.Group>
        </Form.Row>

        <h5 className="text-center p-3">Заполните реквизиты компании для выставления счета</h5>

        <Form.Group controlId="formCompanyName">
          <Form.Label>Название компании</Form.Label>
          <Form.Control placeholder="ИП Иванов И.И" />
        </Form.Group>

        <Form.Group controlId="formCompanyAddress">
          <Form.Label>Юридический адрес</Form.Label>
          <Form.Control placeholder="Казахстан, Восточно-Казахстанская обл., Зыряновский район" />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="formBIN" as={Col} xs={12} md={4}>
            <Form.Label>БИН</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="formIIK" as={Col} xs={12} md={4}>
            <Form.Label>ИИК</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="formBIK" as={Col} xs={12} md={4}>
            <Form.Label>БИК</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>


        <Form.Row>
          <Form.Group as={Col} xs={12} md={3} controlId="formKBE">
            <Form.Label>КБе</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={9} controlId="formBankName">
            <Form.Label>Наименование банка</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        <Form.Group className="border p-3">
          <Form.Group id="formExport" >
            <div className="mb-2">Выберите способ вывоза:</div>
            <Form.Check inline type="radio" label="Наливом с нефтебазы" value={!isOilBase} name="exportWay" id="fromOilbase" onClick={handleClick} />
            <Form.Check inline type="radio" label="Талоны для АЗС" value={isOilBase} name="exportWay" id="fromOilstation" onClick={handleClick} />
          </Form.Group>
          {
            isOilBase ?
              <Form.Group as={Col} controlId="formOilbase" xs={12} md={7} className="px-0" id="targetExport">
                <Form.Label>Выберите цель покупки</Form.Label>
                <Form.Control as="select">
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
            <Form.Control type="email" placeholder="ivanov@email.com" />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control type="tel" placeholder="+7777-123-45-67" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="d-flex justify-content-center">
          <Button type="submit" className="btn-orange">
            Отправить
        </Button>
        </Form.Row>
      </Form>
    )
  }
}
