import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './footer/footer';
import GameComponent from './game/game-comp';
import Header from './header/header';
import Sets from './sets/sets';
import StartComp from './start/start-component';
import ErrorComponent from './stats/error-game';
import StatsMain from './stats/stats-main';
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
  if (!localStorage.getItem('scoreState')) {
    let scoreState = {}
    Object.values(dataCard.sets).map((item) => {
      let somt: any = Object.values(item)[0]
      const arr: any = Object.values(somt)
      for (let i = 0; i < arr.length; i++) {
        const newArr = arr[i]
        for (let j = 0; j < newArr.length; j++) {
          scoreState = {
            ...scoreState,
            [newArr[0]]: [newArr[1], newArr[3], {
              clicks: 0,
              whong: 0,
              right: 0,
              precent: 0
            }],
          }
        }
      }
    })
    localStorage.setItem('scoreState', JSON.stringify(scoreState));
  }
  const routesNames = []
  for (let key of Object.entries(dataCard.sets)) {
    routesNames.push(key)
  }

  const routerTrain = routesNames.map((item, id) => {
    return <Route path={`/${item[0]}`} render={() => <GameComponent key={id} item={item}/>}/>
  })
  const routerGame = routesNames.map((item, id) => {
    return <Route path={`/${item[0]}`} render={() => <StartComp key={id} item={item}/>}/>
  })
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header dataCard={dataCard} onClick={mainFlagHandler}/>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/Sets'} />}/>
            <Route path='/Sets' render={() => <Sets dataCard={dataCard} mainFlag={mainFlag}/>}/>
            {mainFlag === true ? routerTrain : routerGame}
            <Route path='/Statistics' render={() => <StatsMain dataCard={dataCard}/>}/>
            <Route path='/Error Game' render={() => <ErrorComponent mainFlag={mainFlag}/>} />
        </Switch>
            <Footer />
    </BrowserRouter>
  )
}

export default App;
