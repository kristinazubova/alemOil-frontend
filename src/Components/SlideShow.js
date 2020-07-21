import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import azsImg1 from './../Images/azs-1.JPG'
import baseImg1 from '../Images/oilbase-1.jpg'
import azsImg2 from '../Images/azs-2.JPG'
import baseImg2 from '../Images/oilbase-2.jpg'

export default class slideShow extends Component {
  render() {
    return (
      <Carousel className="my-3 shadow" >
        <Carousel.Item data-interval="10000">
          <img
            className="d-block w-100"
            src={azsImg1}
            alt="img1"
          />
          <div className="m-3 p-3 text-center aboutCompany align-content-center">
            Компания «Алем ойл» занимается оптовой и розничной реализацией нефтепродуктов в Восточно-Казахстанской области. Компания была основана в 2005 году под брендом "Бухтарма Ойл" на базе имущественного комплекса "Бухтарминская нефтебаза". В течение 10 лет основным видом деятельности являлись прием, хранение, отпуск нефтепродуктов и их оптовая реализация.
          </div>
        </Carousel.Item>
        <Carousel.Item data-interval="10000">
          <img
            className="d-block w-100 "
            src={baseImg1}
            alt="img2"
          />
          <div className="m-3 p-3 text-center aboutCompany">
            С апреля 2015 года компания занимается развитием собственной сети автозаправочных станций. Отправной точкой стало введение в эксплуатацию новой АЗС в пос. Октябрьский. В 2016 и 2017 г были приобретены АЗС в г. Зыряновске и селе Улкен Нарын.          </div>
        </Carousel.Item>
        <Carousel.Item data-interval="10000">
          <img
            className="d-block w-100 "
            src={azsImg2}
            alt="img3"
          />
          <div className="m-3 p-3 text-center aboutCompany">
            В 2017 году проведена реконструкция АЗС в г. Зыряновск, построена и введена в эксплуатацию АЗС в районе ст. Селезневка под брендом "Alem Oil". С августа 2018 года все АЗС ТОО "Бухтарма Ойл" были переданы под управление ТОО "Alem Oil".
          </div>
        </Carousel.Item>
        <Carousel.Item data-interval="10000">
          <img
            className="d-block w-100 "
            src={baseImg2}
            alt="img4"
          />
          <div className="m-3 p-3 text-center aboutCompany">
            На данный момент компания занимается дальнейшим развитием собственной сети автозаправочных станций в районе Алтай и Катон-Карагайском районе. Все строящиеся АЗС отвечают современным требованиям, а реализуемые нефтепродукты всегда отличаются высоким качеством, чему свидетельствуют многочисленные отзывы клиентов.
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}