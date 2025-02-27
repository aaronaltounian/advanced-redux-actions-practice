import React from 'react';
import CounterButton from "./components/CounterButton";
import SpecialTextBox from "./containers/SpecialTextBoxContainer";
import Counter from "./components/Counter";
import SpecialText from "./containers/SpecialTextContainer";
import UserButtons from "./components/UserButtons";
import Thermostat from "./containers/ThermostatContainer";
import Users from "./components/Users";
import ChangeTemperature from "./containers/ChangeTempContainer";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCity from "./containers/CurrentCityContainer";
import CityDropDown from "./containers/CityDropDownContainer";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
import Modal from "./containers/ModalContainer";
import ShowModal from "./containers/ShowModalContainer";
import store from './store';

class App extends React.Component {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        let message = {value: users, type:'USERS_LOADED'};
        store.dispatch(message)
      })
  }

  render() {
  
    return (
        <div className="App">
          <div className="container">
            <CounterButton />
            <br />
            <SpecialTextBox />
            <br />
            <UserButtons />
            <br />
            <CityDropDown />
            <br />
            <ChangeTemperature />
            <br />
            <SearchTextBox />
            <br />
            <VideoTextBox />
            <br />
            <SortUsers />
            <br />
            <ScaleVideo />
            <br />
            <ShowModal />
          </div>
          <div className="container">
            <Counter />
            <br />
            <SpecialText />
            <br />
            <CurrentCity />
            <br />
            <Thermostat />
            <br />
            <VideoPlayer />
            <br />
            
            
          </div>
          <div className="container">
            <Users />
          </div>
          <Modal />
        </div>
    )
  };
}
export default App;