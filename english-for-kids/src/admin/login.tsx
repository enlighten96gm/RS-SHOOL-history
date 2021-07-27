import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './login.module.css';
import useChangeForm from '../common/myHooks';
import SetsApi from '../login-api/Sets-api';
import { sets } from '../store/sets';
import LoginApi from '../login-api/Login-api';
import { createPost, createWord } from '../redux/actions';

const Login = ({ setAdminName, adminName, setAdmin }: any) => {
  const login = useChangeForm('');
  const password = useChangeForm('');
  const history = useHistory();
  const dispatch = useDispatch();

  const adminSetUp = () => {
    if (adminName !== login.value) {
      alert('Please Register First');
    }
    LoginApi.getAllLogin().then((item) => {
      for (let i = 0; i < item.length; i++) {
        if (item[i]._id === login.value && item[i].password === password.value) {
          setAdminName(item[i]._id);
          setAdmin(true);
          setTimeout(() => {
            history.push('/Categories');
          }, 500);
          setTimeout(() => {
            dispatch(createPost(adminName));
            // dispatch(createWord(adminName))
          }, 0);
        }
      }
    });
  };

  return (
    <div className={css.main}>
      <div className={css.logn__name}>Login</div>
      <div className={css.input__main}>
        <input className={css.first__input} type="text" placeholder="Name" {...login} />
        <input className={css.second__input} type="text" placeholder="Password" {...password} />
      </div>
      <div className={css.footer}>
        <NavLink className={css.cancel__btn} to="/Sets">
          <div>Cancel</div>
        </NavLink>
        <NavLink className={css.link} to="/Register">
          <div className={css.register__btn}>Register</div>
        </NavLink>
        <div onClick={adminSetUp} className={css.login__btn}>
          Login
        </div>
      </div>
    </div>
  );
};
export default Login;
