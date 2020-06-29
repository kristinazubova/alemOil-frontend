import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MaterialIcon from 'material-icons-react';
import axios from 'axios'
import config from './../Config/index'

export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {

    const sendData = (e) => {
      e.preventDefault()

      let userData = {
        email: this.state.email,
        password: this.state.password
      }

      axios.post(`${config.backendURL}/auth`, userData, { withCredentials: true })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push('/updatePrices')
          }
        }).catch(err => {
          alert('Ошибка! ' + err.message)
        })
    }

    return (
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={12} md={4} lg={3}>
            <Form>
              <h3 className="m-4 text-center">Авторизация</h3>
              <Form.Group className="d-flex">
                <Form.Label className="mx-2 my-0 py-1"><MaterialIcon icon="mail_outline" size={30}/></Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  value={this.state.email} 
                  onChange={this.handleChange}
                  placeholder="Введите email"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="d-flex">
                <Form.Label className="mx-2 my-0 py-1"><MaterialIcon icon="lock" size={30}/></Form.Label>
                <Form.Control 
                  type="password" 
                  name="password" 
                  value={this.state.password} 
                  onChange={this.handleChange}
                  placeholder="Введите пароль"
                ></Form.Control>
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn-orange" onClick={sendData}>Отправить</Button>
              </div>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}