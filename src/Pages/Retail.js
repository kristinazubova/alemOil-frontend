import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default class About extends Component {
  render() {
    return (
      <Container fluid className="mx-0 px-0">
        <Row className="w-100">
          <Col xs={0} md={1} lg={2} className="px-0 mx-0"></Col>
          <Col xs={12} md={10} lg={8} className="px-0 mx-0 my-5">
            <h4 className="text-center p-4">Наша розничная сеть АЗС</h4>
            <Table className="w-100">
              <tbody>
                <tr>
                  <th>Наименование АЗС</th>
                  <th>Адрес</th>
                </tr>
                <tr>
                  <td>АЗС №1</td>
                  <td> ВКО, г. Алтай, ул. Тәуелсіздік, 3</td>
                </tr>
                <tr>
                  <td>АЗС №2</td>
                  <td> ВКО, г. Алтай, ул. Зыряновская, 1/А</td>
                </tr>
                <tr>
                  <td>АЗС №3</td>
                  <td> ВКО, район Алтай, пос. Октябрьский, ул. Шоссейная, 3</td>
                </tr>
                <tr>
                  <td>АЗС №4</td>
                  <td> ВКО, Катон-Карагайский район, ул. Аблайхана, 158</td>
                </tr>
                <tr>
                  <td>АЗС №5</td>
                  <td> ВКО, Катон-Карагайский район, ул. Аблайхана, 1/5</td>
                </tr>
                <tr>
                  <td>АЗС №7</td>
                  <td> ВКО, район Алтай, в районе станции Селезневка</td>
                </tr>
              </tbody>
            </Table>
            <div className="w-100 px-0 mx-0 shadow">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A5bc4f84267d7cb7dc51969ec16ec76b814d91c2cbdc2d6fd2346f9eac564fdfc&amp;source=constructor"
                width="100%"
                height="533"
                frameborder="0">
              </iframe>
            </div>
          </Col>
          <Col xs={0} md={1} lg={2} className="px-0 mx-0"></Col>
        </Row>
      </Container>
    )
  }
}