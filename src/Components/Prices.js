import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import config from './../Config/index'

export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      priceList: {
        petrol92: {
          fromOilBase: 66,
          fromOilStation: 55
        },
        petrol95: {
          fromOilBase: 44,
          fromOilStation: 33
        },
        dieselSummer: {
          fromOilBase: 22,
          fromOilStation: 11
        },
        dieselWinter: {
          fromOilBase: 1,
          fromOilStation: 1
        }
      }
    }
  }

  async componentDidMount() {
    let pricesData = await axios.get(`${config.backendURL}/prices/`)
    const priceList = pricesData.data;
    this.setState({ priceList });
  }

  render() {
    let priceList = this.state.priceList;

    return (
      <div>
        <h5 className="m-4 text-center ">Текущие цены*</h5>
        <Table responsive="sm" bordered className="flex-md-column mb-1">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">АИ-92</th>
              <th className="text-center">АИ-95</th>
              <th className="text-center">Диз. топливо (летнее)</th>
              <th className="text-center">Диз. топливо (зимнее)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Вывоз наливом с нефтебазы</td>
              <td className="text-center">{priceList.petrol92.fromOilBase}</td>
              <td className="text-center">{priceList.petrol95.fromOilBase}</td>
              <td className="text-center">{priceList.dieselSummer.fromOilBase}</td>
              <td className="text-center">{priceList.dieselWinter.fromOilBase}</td>
            </tr>
            <tr>
              <td>Талоны для отпуска с АЗС</td>
              <td className="text-center">{priceList.petrol92.fromOilStation}</td>
              <td className="text-center">{priceList.petrol95.fromOilStation}</td>
              <td className="text-center">{priceList.dieselSummer.fromOilStation}</td>
              <td className="text-center">{priceList.dieselWinter.fromOilStation}</td>
            </tr>
          </tbody>
        </Table>
        <p className="py-0 my-0">*цены указаны в тенге за 1 литр</p>
      </div>
    )
  }
}