import React from 'react';
import css from './footer.module.css';

const Footer = () => {
  return (
    <div className={css.main}>
      <div>
        <div className={css.github}>
          <a href="https://github.com/enlighten96gm">My github</a>
        </div>
        <div className={css.year}>Year: 2021</div>
      </div>
      <div className={css.rs}>
        <a href="https://rs.school/js/">
          <img src="https://rs.school/images/rs_school_js.svg" alt="https://rs.school/js/" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
