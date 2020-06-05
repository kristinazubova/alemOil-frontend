import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

export default class About extends Component {
  render() {
    return (
      <div>
        <h4 className="m-4 text-center ">Текущие цены</h4>
        <Table responsive="sm" bordered className="flex-md-column">
            <thead>
            <tr>
              <th></th>
              <th>АИ-92</th>
              <th>АИ-95</th>
              <th>Диз. топливо (летнее)</th>
              <th>Диз. топливо (зимнее)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вывоз наливом с нефтебазы</td>
              <td>150</td>
              <td>150</td>
              <td>150</td>
              <td>150</td>
            </tr>
            <tr>
              <td>Талоны для АЗС</td>
              <td>180</td>
              <td>180</td>
              <td>180</td>
              <td>180</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}


