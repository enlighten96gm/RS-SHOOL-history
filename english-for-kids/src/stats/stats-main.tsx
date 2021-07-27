import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DataType } from '../types/types';
import SingleRow from './row-comp';
import css from './statsMain.module.css';

const StatsMain: React.FC<{ dataCard: DataType }> = ({ dataCard }) => {
  const [rerender, setRerender] = useState(false);
  const [reverse, setReverse] = useState(true);
  const [rus, setRus] = useState(true);
  const [click, setClick] = useState(true);
  const [wrong, setWrong] = useState(true);
  const [correct, setCorrect] = useState(true);
  const [sortFor, seSortFor] = useState('');
  const clearStorage = () => {
    window.localStorage.clear();
    setRerender(true);
    if (!localStorage.getItem('scoreState')) {
      let scoreState = {};
      Object.values(dataCard.sets).map((item) => {
        const somt = Object.values(item)[0];
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
  };
  const localData = JSON.parse(localStorage.getItem('scoreState') as any);
  const rowArr: any = [];

  for (const key of Object.entries(localData)) {
    rowArr.push(key);
  }
  const reverseHeandler = () => {
    seSortFor('english');
    if (reverse === true) {
      setReverse(false);
    } else {
      setReverse(true);
    }
  };
  const reverseRus = () => {
    seSortFor('russian');
    if (rus === true) {
      setRus(false);
    } else {
      setRus(true);
    }
  };
  const reverseClick = () => {
    seSortFor('click');
    if (click === true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  const reverseWrong = () => {
    seSortFor('wrong');
    if (wrong === true) {
      setWrong(false);
    } else {
      setWrong(true);
    }
  };
  const reverseCorrect = () => {
    seSortFor('correct');
    if (correct === true) {
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  };

  if (reverse === true && sortFor === 'english') {
    rowArr.sort(function (a: any, b: any) {
      if (a[0] < b[0]) return 1;
      if (a[0] > b[0]) return -1;
    });
  } else if (reverse === false && sortFor === 'english') {
    rowArr.sort(function (a: any, b: any) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
    });
  }

  if (rus === true && sortFor === 'russian') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][0] < b[1][0]) return 1;
      if (a[1][0] > b[1][0]) return -1;
    });
  } else if (rus === false && sortFor === 'russian') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][0] < b[1][0]) return -1;
      if (a[1][0] > b[1][0]) return 1;
    });
  }

  if (click === true && sortFor === 'click') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][2].clicks < b[1][2].clicks) return 1;
      if (a[1][2].clicks > b[1][2].clicks) return -1;
    });
  } else if (click === false && sortFor === 'click') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][2].clicks < b[1][2].clicks) return -1;
      if (a[1][2].clicks > b[1][2].clicks) return 1;
    });
  }

  if (wrong === true && sortFor === 'wrong') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][2].whong < b[1][2].whong) return 1;
      if (a[1][2].whong > b[1][2].whong) return -1;
    });
  } else if (wrong === false && sortFor === 'wrong') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][2].whong < b[1][2].whong) return -1;
      if (a[1][2].whong > b[1][2].whong) return 1;
    });
  }

  if (correct === true && sortFor === 'correct') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][2].right < b[1][2].right) return 1;
      if (a[1][2].right > b[1][2].right) return -1;
    });
  } else if (correct === false && sortFor === 'correct') {
    rowArr.sort(function (a: any, b: any) {
      if (a[1][2].right < b[1][2].right) return -1;
      if (a[1][2].right > b[1][2].right) return 1;
    });
  }

  const rederSingleRow = rowArr.map((item: any) => {
    return <SingleRow item={item} />;
  });

  return (
    <div className={css.main}>
      <div className={css.buttons}>
        <NavLink className={css.link} to="Error Game">
          <div className={css.repeat}>REPEAT DIFICULT WORD</div>
        </NavLink>
        <div className={css.reset} onClick={clearStorage}>
          RESET
        </div>
      </div>
      <div className={css.table}>
        <div className={css.cards}>CARDS</div>
        <div className={css.theader}>
          <div onClick={reverseHeandler} className={css.singleCol}>
            Word
          </div>
          <div onClick={reverseRus} className={css.singleCol}>
            Translation
          </div>
          <div className={css.singleCol}>Category</div>
          <div onClick={reverseClick} className={css.singleCol}>
            Clicks
          </div>
          <div onClick={reverseWrong} className={css.singleCol}>
            Wrong
          </div>
          <div onClick={reverseCorrect} className={css.singleCol}>
            Correct
          </div>
          <div className={css.singleCol}>% errors</div>
        </div>
        {rederSingleRow}
      </div>
    </div>
  );
};
export default StatsMain;
