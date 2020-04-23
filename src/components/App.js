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
/* import PageNotFound from './PageNotFound';  */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.getDataFromApi = this.getDataFromApi.bind(this);
    /*     this.sortAlphabetical = this.sortAlphabetical.bind(this); */

    this.state = {
      data: [],
      value: '',
    };
  }

  getDataFromApi() {
    fetchData().then((data) => {
      this.setState({
        data: data.results,
      });
    });
  }

  /*   sortAlphabetical() {
    this.state.data.sort((a, b) => {
      if (a.data.name > b.data.name) {
        return 1;
      }
      if (a.data.name < b.data.name) {
        return -1;
      }
      return 0;
    });
  } */

  componentDidMount() {
    this.getDataFromApi();
    /*    this.sortAlphabetical(); */
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue,
    });
  }

  renderCharacterDetail(props) {
    const routeID = props.match.params.id;
    const data = this.state.data;

    for (let dataItem of data) {
      if (dataItem.id === parseInt(routeID)) {
        return <CharacterDetail dataObj={dataItem} />;
      } /* else {
        return <PageNotFound />;
      }  */
    }
  }

  render() {
    const { data, value } = this.state;
    return (
      <div className="app-container">
        <Header />
        <main id="main">
          <Switch>
            <Route exact path="/main" >
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
