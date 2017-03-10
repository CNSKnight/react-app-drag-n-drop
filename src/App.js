import React, {Component} from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
//import './App.css';
import ExprBloc from './expressions.comp';
import FuncsBar from './functions.comp';

import funcs from './data.json';
/*{
  filter,
  map,
  sum,
  min,
  max,
  mean
}*/
import * as _funcs from 'lodash';

//import {keyBy, mapValues} from 'lodash';

import {Row, Col} from 'react-materialize';

funcs.forEach(f => {
  f.func = funcs[f.name];
});

const expsInit = {
  functions: funcs,
  sets: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = expsInit;
  }

  render() {
    return (
      <div className="App">
        <div className="expressions container">
          <div className="banner">
            <h4 className="highlight">Expression Assembler</h4>
            <p className="App-intro">Drag/Drop functions in order to create a complete expression.</p>
          </div>
          <Row>
            <Col s={12}>
              <ExprBloc {...this.state}/>
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <FuncsBar {...this.state}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
