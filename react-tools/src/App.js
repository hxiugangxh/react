import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactResponsiveTables from './components/react-responsive-tables';
import EchartsTest from './components/echart-test';

import {Chart, Axis, Tooltip, Geom, Coord} from 'bizcharts';
import TemperatureInput from './components/temperature-input';

class App extends Component {
  componentDidMount() {
  }

  render() {
    const data = [
      {year: '1991', value: 3},
      {year: '1992', value: 4},
      {year: '1993', value: 3.5},
      {year: '1994', value: 5},
      {year: '1995', value: 4.9},
      {year: '1996', value: 6},
      {year: '1997', value: 7},
      {year: '1998', value: 9},
      {year: '1999', value: 13}
    ];

    const cols = {
      'value': {min: 0},
      'year': {range: [0, 1]}
    };

    let test;

    return (
      <div className="App">
        <TemperatureInput scale="c"/>
        <TemperatureInput scale="f"/>
        <Chart height={400} data={data} scale={cols} forceFit
               onGetG2Instance={g2Chart => {
                 g2Chart.animate(false);
                 test = g2Chart;
               }}
               onPlotClick={ev => {
                 var point = {
                   x: ev.x,
                   y: ev.y
                 };
                 var items = test.getTooltipItems(point);
                 console.log(items, items[0].value);
               }}
              >
          <Axis name="year"/>
          <Axis name="value"/>
          <Tooltip crosshairs={{type: 'y'}}/>
          <Geom type="line" position="year*value" size={2}/>
          <Geom type='point' position="year*value" size={4} shape={'circle'} style={{stroke: '#fff', lineWidth: 1}}/>
        </Chart>
      </div>
    );
  }
}

export default App;
