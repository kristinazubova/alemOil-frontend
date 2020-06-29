import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import axios from 'axios'

export default class About extends Component {

  constructor(props) {
    super(props)

    this.state = {
      columns: [{
        dataField: 'name',
        text: 'Наименование продукта',
        editable: false
      }, {
        dataField: 'priceOB',
        text: 'Цена с отпуском с нефтебазы'
      }, {
        dataField: 'priceOS',
        text: 'Цена с отпуском талонами с АЗС'
      }],

      products: [
        { id: 1, name: 'АИ-92', priceOB: 123, priceOS: 125 },
        { id: 2, name: 'АИ-95', priceOB: 123, priceOS: 125 },
        { id: 3, name: 'ДТл', priceOB: 123, priceOS: 125 },
        { id: 4, name: 'ДТз', priceOB: 123, priceOS: 125 }
      ]
    }
  }

  cellEdit = cellEditFactory({
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: (oldValue, newValue, row, column) => {
      let products = this.state.products;
      products[row.id - 1][column.dataField] = newValue;

      this.setState({
        products
      })
    }
  });

  render() {
    const updateTable = (e) => {
      e.preventDefault()

      axios.post('http://localhost:3001/prices', this.state.products, { withCredentials: true })
        .then(() => {
          alert('Цены успешно обновлены!')
        })
        .catch(() => {
          alert('Что-то пошло не так! Цены не обновлены :( ')
        })
    }

    return (
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs={12} md={8} className="text-center">
            <h3 className="m-4">Оптовые продажи</h3>
            <h5 className="m-4">Здесь вы можете обновить цены на сайте</h5>
            <div className="table-responsive-sm">
              <BootstrapTable
                keyField="id"
                data={this.state.products}
                columns={this.state.columns}
                cellEdit={this.cellEdit}
              />
            </div>
            <Button type="submit" className="btn-orange m-4" onClick={updateTable}>
              Отправить
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}