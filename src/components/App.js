/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/_app.scss';
import fetchData from '../services/Fetch';
import Header from './Header';
import CharacterList from './CharacterList';
import FilterSearch from './FilterSearch';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.resetValue = this.resetValue.bind(this);

    this.state = {
      data: [],
      value: '',
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

  resetValue() {
    this.setState({
      value: '',
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
        <section className="section-container"></section>
        <main id="main">
          <Switch>
            <Route exact path="/main">
              <FilterSearch
                handleInputValue={this.handleInputValue}
                value={value}
                resetValue={this.resetValue}
              />

              <CharacterList data={data} inputValue={value} />
            </Route>
            <Route
              path="/detail/:id"
              render={this.renderCharacterDetail}
            ></Route>
          </Switch>
        </main>
        <footer className="footer-container">
          <a
            href="https://github.com/laurageeme"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>laurageeme | &copy;2020</span>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
