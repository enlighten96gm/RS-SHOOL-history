import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DataType } from '../types/types';
import SingleRow from './row-comp';
import css from './statsMain.module.css'
const StatsMain: React.FC<{dataCard: DataType}> = ({dataCard}) => {
    const [rerender, setRerender] = useState(false)
    const [reverse, setReverse] = useState(true)
    const clearStorage = () => {
        window.localStorage.clear()
        setRerender(true)
        if (!localStorage.getItem('scoreState')) {
            let scoreState = {}
            Object.values(dataCard.sets).map((item) => {
              let somt = Object.values(item)[0]
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
    }
    const localData = JSON.parse(localStorage.getItem('scoreState') as any)
    const rowArr: any = []
    
    for (let key of Object.entries(localData)) {
        rowArr.push(key)
    }
    const reverseHeandler = () => {
      if (reverse === true) {
      setReverse(false)
      } else {
      setReverse(true)
      }
    }
      if (reverse === true) {
        rowArr.sort(function(a: any, b: any) {
          if (a[0] < b[0]) return 1
          if (a[0] > b[0]) return -1
      })
      } else {
        rowArr.sort(function(a: any, b: any) {
          if (a[0] < b[0]) return -1
          if (a[0] > b[0]) return 1
      })
      }
    const rederSingleRow = rowArr.map((item: any) => {
        return <SingleRow item={item}/>
    })
    
    return (
        <div className={css.main}>
            <div className={css.buttons}>
              <NavLink className={css.link} to={'Error Game'}>
                <div className={css.repeat}>REPEAT DIFICULT WORD</div>
              </NavLink>
                <div className={css.reset} onClick={clearStorage}>RESET</div>
            </div>
            <div className={css.table}>
                <div className={css.cards}>CARDS</div>
                <div className={css.theader}>
                    <div onClick={reverseHeandler} className={css.singleCol}>Word</div>
                    <div className={css.singleCol}>Translation</div>
                    <div className={css.singleCol}>Category</div>
                    <div className={css.singleCol}>Clicks</div>
                    <div className={css.singleCol}>Wrong</div>
                    <div className={css.singleCol}>Correct</div>
                    <div className={css.singleCol}>% errors</div>
                </div>
                {rederSingleRow}
            </div>
        </div>
    )
}
export default StatsMain