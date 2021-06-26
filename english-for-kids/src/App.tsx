import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import GameComponent from './game/game-comp';
import Header from './header/header';
import Sets from './sets/sets';
import StartComp from './start/start-component';
import Data from './store/data.json'

const App = () => {
  const [dataCard, setData] = useState({...Data})
  const [mainFlag, setMainFlag] = useState(true)
  const mainFlagHandler = () => {
      if (mainFlag) {
        setMainFlag(false)
      } else {
        setMainFlag(true)
      }
  }
  const routesNames = []
  for (let key of Object.entries(dataCard.sets)) {
    routesNames.push(key)
  }
  const routerTrain = routesNames.map((item: any) => {
    return <Route path={`/${item[0]}`} render={() => <GameComponent key={item} item={item}/>}/>
  })
  const routerGame = routesNames.map((item: any) => {
    return <Route path={`/${item[0]}`} render={() => <StartComp key={item} item={item}/>}/>
  })
  
  return (
    <BrowserRouter>
            <Header dataCard={dataCard} onClick={mainFlagHandler}/>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/Sets'} />}/>
            <Route path='/Sets' render={() => <Sets dataCard={dataCard}/>}/>
            {mainFlag === true ? routerTrain : routerGame}
        </Switch>
    </BrowserRouter>
  )
}

export default App;
