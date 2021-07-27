import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AdminPanel from './admin/admin-comp/AdminPanel';
import WordsPanel from './admin/admin-comp/WordsPannel';
import AdminHeader from './admin/admin-header/Admin-header';
import Login from './admin/login';
import Registration from './admin/register/register';
import './App.css';
import Footer from './footer/footer';
import GameComponent from './game/game-comp';
import Header from './header/header';
import HOC from './hoc';
import SetsApi from './login-api/Sets-api';
import Sets from './sets/sets';
import StartComp from './start/start-component';
import ErrorComponent from './stats/error-game';
import StatsMain from './stats/stats-main';
import Data from './store/data.json';

const App = () => {
  const categorySelector = useSelector((state: any) => state.category.category);
  const [adminFlag, setAdminFlag] = useState(true);
  const [correctPath, setCorrectPath] = useState('');
  console.log(correctPath);

  const changeColor = () => {
    if (adminFlag) {
      setAdminFlag(false);
    } else {
      setAdminFlag(true);
    }
  };

  const wordsSelector = useSelector((state: any) => state.words.words);
  const [render, setRender] = useState(false);
  const rerenderHeandler = () => {
    if (render == false) {
      setRender(true);
    } else {
      setRender(false);
    }
  };

  const data: any = {
    sets: {},
  };
  for (const key of Object.entries(categorySelector)) {
    const correctCategeory = key[0];
    const category: any = key[1];
    const newData: any = {
      [category]: {},
    };
    data.sets[key[0]] = newData;
    for (const key2 of Object.entries(wordsSelector)) {
      const wordArray: any = key2[1];
      const correctWord = wordArray[4];
      if (correctWord === correctCategeory) {
        newData[category] = {
          ...newData[category],
          [wordArray[0]]: [wordArray[1], wordArray[2], wordArray[3], correctWord],
        };
      }
    }
  }

  const [adminName, setAdminName] = useState('');

  // Request for every single set
  const setsArr: any = [];
  SetsApi.getSets(adminName).then((res) => {
    res.map((item: any) => setsArr.push(item));
  });
  // Request for every single set

  const [admin, setAdmin] = useState(false);
  const [dataCard, setData] = useState({ ...Data });
  const [mainFlag, setMainFlag] = useState(true);
  useEffect(() => {
    setData(data);
  }, [categorySelector, wordsSelector]);

  const mainFlagHandler = () => {
    if (mainFlag) {
      setMainFlag(false);
    } else {
      setMainFlag(true);
    }
  };
  if (!localStorage.getItem('scoreState')) {
    let scoreState = {};
    Object.values(dataCard.sets).map((item) => {
      const somt: any = Object.values(item)[0];
      const arr: any = Object.values(somt);
      for (let i = 0; i < arr.length; i++) {
        const newArr = arr[i];
        for (let j = 0; j < newArr.length; j++) {
          scoreState = {
            ...scoreState,
            [newArr[0]]: [
              newArr[1],
              newArr[3],
              {
                clicks: 0,
                whong: 0,
                right: 0,
                precent: 0,
              },
            ],
          };
        }
      }
    });
    localStorage.setItem('scoreState', JSON.stringify(scoreState));
  }
  const routesNames = [];
  for (const key of Object.entries(dataCard.sets)) {
    routesNames.push(key);
  }

  const routerTrain = routesNames.map((item, id) => {
    return <Route path={`/${item[0]}`} render={() => <GameComponent key={id} item={item} />} />;
  });
  const routerGame = routesNames.map((item, id) => {
    return <Route path={`/${item[0]}`} render={() => <StartComp key={id} item={item} />} />;
  });
  const RouterAdminWords = routesNames.map((item, id) => {
    return (
      <Route
        path={`/${item[0]}category`}
        render={() => <WordsPanel item={item} adminName={adminName} />}
      />
    );
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {admin === false ? (
        <Header dataCard={dataCard} onClick={mainFlagHandler} />
      ) : (
        <AdminHeader
          setAdmin={setAdmin}
          changeColor={changeColor}
          adminFlag={adminFlag}
          correctPath={correctPath}
        />
      )}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/Sets" />} />
        <Route path="/Sets" render={() => <Sets dataCard={dataCard} mainFlag={mainFlag} />} />
        {RouterAdminWords}
        {mainFlag === true ? routerTrain : routerGame}
        <Route path="/Statistics" render={() => <StatsMain dataCard={dataCard} />} />
        <Route path="/Error Game" render={() => <ErrorComponent mainFlag={mainFlag} />} />
        <Route
          path="/Login"
          render={() => (
            <Login setAdminName={setAdminName} adminName={adminName} setAdmin={setAdmin} />
          )}
        />
        <Route
          path="/Register"
          render={() => <Registration setAdminName={setAdminName} adminName={adminName} />}
        />
        <Route
          path="/Categories"
          render={() => (
            <AdminPanel
              dataCard={dataCard}
              adminName={adminName}
              rerenderHeandler={rerenderHeandler}
              changeColor={changeColor}
              setCorrectPath={setCorrectPath}
            />
          )}
        />
        <Route path="/category" render={() => <HOC />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
