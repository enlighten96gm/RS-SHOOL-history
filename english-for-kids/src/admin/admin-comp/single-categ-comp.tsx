import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SetsApi from '../../login-api/Sets-api';
import { createPost } from '../../redux/actions';
import Sets from '../../sets/sets';
import css from './admin.module.css';

const SingleCategoryComp = ({
  item,
  adminName,
  rerenderHeandler,
  changeColor,
  setCorrectPath,
}: any) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newImage, setNewImage] = useState(null) as any;
  const words: any = Object.values(item[1])[0];
  const wordLength = Object.keys(words).length;
  const image = Object.keys(item[1]);
  const handleCorrectPath = () => {
    setCorrectPath(item[0]);
  };
  const updateHeandler = () => {
    console.log(item[0]);

    if (update === false) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  };
  const handleInputChange = (e: any) => {
    setNewCategory(e.target.value);
  };
  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newSrc = reader.result;
      setNewImage(newSrc);
    };
  };

  const changeFullHeandler = () => {
    const categoryName = item[0];
    const arr: any = [];
    SetsApi.getSets(adminName).then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].set === categoryName) {
          arr.push(res[i]._id);
          const body = {
            _id: arr[0],
            set: newCategory,
            image: newImage,
            user_id: adminName,
          };
          SetsApi.updateSet(body, arr[0], adminName);
          setTimeout(() => {
            dispatch(createPost(adminName));
          }, 0);
          setUpdate(false);
          rerenderHeandler();
        }
      }
    });
  };
  const deleteHeandler = () => {
    const correctCategory = item[0];
    SetsApi.getSets(adminName).then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].set === correctCategory) {
          SetsApi.deleteSet(res[i]._id, adminName).then((newRes: any) => {
            dispatch(createPost(adminName));
          });
        }
      }
    });
    // console.log(correctCategory);
  };

  return (
    <div>
      {update === false ? (
        <div className={css.single}>
          <img className={css.image} src={`${image}`} alt="#" />
          <div onClick={deleteHeandler} className={css.delete}>
            DELETE
          </div>
          <div className={css.heading}>{item[0]}</div>
          <div>Words: {wordLength}</div>
          <div className={css.buttons}>
            <div onClick={updateHeandler} className={css.firstBtn}>
              Update
            </div>
            <NavLink onClick={changeColor} className={css.link} to={`/${item[0]}category`}>
              <div onClick={handleCorrectPath} className={css.secondBtn}>
                Add Word
              </div>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={css.single}>
          <div className={css.change_input__block}>
            <div className={css.change_input__text}>Change category name</div>
            <input onChange={handleInputChange} className={css.change_input__input} type="text" />
          </div>
          <div className={css.img__block}>
            <input onChange={handleFile} className={css.img__block__file} type="file" />
            <div className={css.swagg}>Change IMG</div>
          </div>
          <div className={css.buttons}>
            <div onClick={updateHeandler} className={css.firstBtn}>
              Cancel
            </div>
            <div onClick={changeFullHeandler} className={css.secondBtn}>
              Create
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleCategoryComp;
