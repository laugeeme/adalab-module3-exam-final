/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/_app.scss';
import fetchData from '../services/Fetch';
import Header from './Header';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';
import NoResults from './NoResults';
import PageNotFound from './PageNotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);

    this.state = {
      data: [],
      value: '',
      results: true,
    };
  }

  componentDidMount() {
    const dataLocal = JSON.parse(localStorage.getItem('dataValue'));
    if (dataLocal !== null) {
      this.setState({
        value: dataLocal,
      });
    }

    fetchData().then((data) => {
      this.setState({
        data: data.results,
      });
    });
  }

  componentDidUpdate() {
    localStorage.setItem('dataValue', JSON.stringify(this.state.value));
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue,
    });
  }

  renderCharacterDetail(props) {
    const routeID = props.match.params.id;
    const data = this.state.data;
    const idExist = data.some((dataObj) => dataObj.id === parseInt(routeID));

    for (let dataItem of data) {
      if (dataItem.id === parseInt(routeID)) {
        return <CharacterDetail dataObj={dataItem} />;
      }
      if (idExist !== true) {
        return <PageNotFound />;
      }
    }
  }

  render() {
    const { data, value } = this.state;
    return (
      <div className="app-container">
        <Header />
        <main id="main">
          <Switch>
            <Route exact path="/main">
              <FilterSearch
                handleInputValue={this.handleInputValue}
                value={value}
              />

              <CharacterList data={data} inputValue={value} />
              <NoResults value={value} />
            </Route>
            <Route
              path="/detail/:id"
              render={this.renderCharacterDetail}
            ></Route>
          </Switch>
        </main>
        <footer className="footer-container"></footer>
      </div>
    );
  }
}

export default App;
