import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import MaterialIcon from 'material-icons-react';


export default class Contacts extends Component {
  render() {
    return (
      <Container fluid className="py-4">
        <Row className="w-100">
          <Col></Col>
          <Col xs={12} md={10} lg={8} className="lg-m-5">
            <Form.Group className="p-5 shadow">
              <h3 className="m-4 text-center">Контакты</h3>
              <div className="d-flex mx-2 my-4 align-items-center">
                <MaterialIcon icon="location_on" size={30} />
                <p className="my-0 mx-2">Наш адрес: Казахстан, Восточно-Казахстанская область, Алтай район, ст. Бухтарма</p>
              </div>
              <div className="d-flex mx-2 my-4 align-items-center">
                <MaterialIcon icon="call" size={30} />
                <p className="my-0 mx-2">Телефон для связи: +77233500000</p>
              </div>
              <div className="d-flex mx-2 my-4 align-items-center">
              <MaterialIcon icon="alternate_email" size={30} />
              <p className="my-0 mx-2">E-mail: alemoil@mail.ru</p>
            </div>
            <div className="my-5 officeMap" responsive>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A04e0a612cf41b6d200f171ddf13049e24d85d075ca627d9b5e6e95c737aee7ef&amp;source=constructor" width="100%" height="520px" frameborder="0"></iframe>
            </div>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    )
  }
}