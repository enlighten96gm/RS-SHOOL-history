import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import css from './register.module.css';
import useChangeForm from '../../common/myHooks';
import LoginApi from '../../login-api/Login-api';
import { sets, words } from '../../store/sets';
import SetsApi from '../../login-api/Sets-api';
import WordsApi from '../../login-api/Words-api';

const Registration = ({ setAdminName, adminName }: any) => {
  const login = useChangeForm('');
  const password = useChangeForm('');
  const confirmPassword = useChangeForm('');
  const [flag, setFlag] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (password.value === confirmPassword.value && password.value !== '') {
      setFlag(true);
    } else {
      setFlag(false);
    }
  });

  const registerHeandler = () => {
    setAdminName(login.value);
    if (flag) {
      const userBody = { _id: login.value, password: password.value };
      LoginApi.postLogin(userBody);
      for (let j = 0; j < sets.length; j++) {
        const body = {
          set: sets[j][0],
          image: sets[j][1],
          user_id: login.value,
        };
        SetsApi.postSet(body, login.value);
        for (let i = 0; i < words[j].length; i += 1) {
          const wordsBody = {
            image: words[j][i][0],
            word: words[j][i][1],
            translation: words[j][i][2],
            sound: words[j][i][3],
            set_id: words[j][i][4],
            user_id: login.value,
          };
          WordsApi.postWord(wordsBody, login.value, words[j][i][4]);
        }
      }
      setTimeout(() => {
        history.push('/Login');
      }, 500);
    }
  };

  return (
    <div className={css.main}>
      <div className={css.logn__name}>Register</div>
      <div className={css.input__main}>
        <input className={css.first__input} type="text" placeholder="Name" {...login} />
        <input
          className={flag === false ? css.second__input : css.active1}
          type="text"
          placeholder="Password"
          {...password}
        />
        <input
          className={flag === false ? css.third__input : css.active2}
          type="text"
          placeholder="Confirm Password"
          {...confirmPassword}
        />
      </div>
      <div className={css.footer}>
        <NavLink className={css.cancel__btn} to="/Sets">
          <div>Cancel</div>
        </NavLink>
        <div onClick={registerHeandler} className={css.login__btn}>
          Register
        </div>
      </div>
    </div>
  );
};
export default Registration;
