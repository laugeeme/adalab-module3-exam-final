/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/_app.scss';
import fetchData from '../services/Fetch';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.state = {
      data: [],
      value: '',
    };
  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({
        data: data.results,
      });
    });
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue,
    });
  }

  renderCharacterDetail(props) {
    const routeID = props.match.params.id;
    const data = this.state.data;
    console.log(data);

    for (let dataItem of data) {
      if (dataItem.id === parseInt(routeID)) {
        return <CharacterDetail dataObj={dataItem} />;
      }
    }
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <FilterSearch handleInputValue={this.handleInputValue} />
            <CharacterList
              data={this.state.data}
              inputValue={this.state.value}
            />
          </Route>
          <Route path="/detail/:id" render={this.renderCharacterDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
