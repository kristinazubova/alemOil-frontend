import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import MaterialIcon from 'material-icons-react';


export default class Contacts extends Component {
  render() {
    return (
      <Container fluid className="mx-0 px-0">
        <Row className="w-100 mx-0">
          <Col></Col>
          <Col xs={12} md={10} lg={8} className="px-0 mx-0">
            <Form.Group className=" px-4 shadow">
              <h3 className="m-4 text-center">Контакты</h3>
              <div className="d-flex mx-2 my-4 align-items-center">
                <MaterialIcon icon="location_on" size={30} />
                <p className="my-0 mx-2">Наш адрес: Казахстан, Восточно-Казахстанская область, Алтай район, ст. Бухтарма, ул. Железнодорожная д.10</p>
              </div>
              <div className="d-flex mx-2 my-4 align-items-center">
                <MaterialIcon icon="call" size={30} />
                <p className="my-0 mx-2">Телефон для связи: +7(72335)30790 или +7(771)3051188</p>
              </div>
              <div className="d-flex mx-2 my-4 align-items-center">
                <MaterialIcon icon="alternate_email" size={30} />
                <p className="my-0 mx-2">E-mail: opt@alemoil.com</p>
              </div>
              <div className="my-5 officeMap">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A04e0a612cf41b6d200f171ddf13049e24d85d075ca627d9b5e6e95c737aee7ef&amp;source=constructor"
                  width="100%"
                  height="520px"
                  title="Карта расположения офиса"> 
            </iframe>
              </div>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    )
  }
}