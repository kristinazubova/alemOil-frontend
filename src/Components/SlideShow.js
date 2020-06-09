import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import azsImg1 from './../Images/azs-1.JPG'
import baseImg1 from '../Images/oilbase-1.jpg'
import azsImg2 from '../Images/azs-2.JPG'
import baseImg2 from '../Images/oilbase-2.jpg'

export default class slideShow extends Component {
  render() {
    return (
      <Carousel className="my-3 shadow">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={azsImg1}
          />
          <div className="m-3 p-3 text-center aboutCompany">
            Компания «Алем ойл» занимается оптовой и розничной реализацией нефтепродуктов в Восточно-Казахстанской области.  На данный момент компания занимается развитием собственной сети автозаправочных станций в Зыряновском и Катон-Карагайском районах. Построено 2 новых АЗС и реконструировано 5.
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100 "
            src={baseImg1}
          />
          <div className="m-3 p-3 text-center aboutCompany">
            Компания «Алем ойл» занимается оптовой и розничной реализацией нефтепродуктов в Восточно-Казахстанской области.  На данный момент компания занимается развитием собственной сети автозаправочных станций в Зыряновском и Катон-Карагайском районах. Построено 2 новых АЗС и реконструировано 5.
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100 "
            src={azsImg2}
          />
          <div className="m-3 p-3 text-center aboutCompany">
            Компания «Алем ойл» занимается оптовой и розничной реализацией нефтепродуктов в Восточно-Казахстанской области.  На данный момент компания занимается развитием собственной сети автозаправочных станций в Зыряновском и Катон-Карагайском районах. Построено 2 новых АЗС и реконструировано 5.
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={baseImg2}
          />
          <div className="m-3 p-3 text-center aboutCompany">
            Компания «Алем ойл» занимается оптовой и розничной реализацией нефтепродуктов в Восточно-Казахстанской области.  На данный момент компания занимается развитием собственной сети автозаправочных станций в Зыряновском и Катон-Карагайском районах. Построено 2 новых АЗС и реконструировано 5.
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}