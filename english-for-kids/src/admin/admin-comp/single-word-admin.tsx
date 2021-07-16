import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import WordsApi from '../../login-api/Words-api';
import { createWord } from '../../redux/actions';
import css from './wordspanel.module.css';

const SingleWordAdmin = ({ item, adminName }: any) => {
  const dispatch = useDispatch();
  const [changer, setChanger] = useState(false);
  const [newWord, setNewWord] = useState('');
  const [newTranslate, setNewTranslate] = useState('');
  const [newImage, setNewImage] = useState(null) as any;
  const [newSound, setNewSound] = useState(null) as any;
  const handleNewWord = (e: any) => {
    setNewWord(e.target.value);
  };
  const handleNewTranslate = (e: any) => {
    setNewTranslate(e.target.value);
  };
  const handleNewImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newSrc = reader.result;
      setNewImage(newSrc);
    };
  };
  const handleNewSound = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newSrc = reader.result;
      setNewSound(newSrc);
    };
  };
  const changerHeandler = () => {
    if (changer === false) {
      setChanger(true);
    } else {
      setChanger(false);
    }
  };
  const soundHeandler = () => {
    const music = new Audio(item[1][2]);
    music.play();
  };
  const handleChangeWord = () => {
    const currentWord = item[1][0];
    const currentSet = item[1][3];
    WordsApi.getWords(adminName, currentSet).then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].word === currentWord) {
          const wordBody = {
            _id: res[i]._id,
            image: newImage,
            word: newWord,
            translation: newTranslate,
            sound: newSound,
            set_id: currentSet,
            user_id: adminName,
          };
          WordsApi.updateWord(wordBody, adminName, currentSet, res[i]._id).then((newRes) => {
            dispatch(createWord(adminName, currentSet));
            changerHeandler();
          });
        }
      }
    });
  };
  const deleteWordHeandler = () => {
    const currentSet = item[1][3];
    const currentWord = item[1][0];
    WordsApi.getWords(adminName, currentSet).then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].word === currentWord) {
          WordsApi.deleteWord(adminName, currentSet, res[i]._id).then((newRes) => {
            dispatch(createWord(adminName, currentSet));
          });
        }
      }
    });
  };
  const image = item[0];
  return (
    <div>
      {changer === false ? (
        <div className={css.single}>
          <div onClick={deleteWordHeandler} className={css.delete__word}>
            delete
          </div>
          <div>
            <span className={css.span}>Word:</span> {item[1][0]}
          </div>
          <div>
            <span className={css.span}>Translation:</span> {item[1][1]}
          </div>
          <div onClick={soundHeandler} className={css.sound}>
            <span className={css.span}>Sound: </span>Click Me
          </div>
          <div>
            <span className={css.span}>Image:</span>
          </div>
          <img className={css.image__word} src={`${image}`} alt="" />
          <div onClick={changerHeandler} className={css.button__change}>
            CHANGE
          </div>
        </div>
      ) : (
        <div className={css.single__new_adder}>
          <div className={css.inputs}>
            <div className={css.word__adder}>Word:</div>
            <input onChange={handleNewWord} className={css.input__adder} type="text" />
            <div className={css.word__adder}>Translation:</div>
            <input onChange={handleNewTranslate} className={css.input__adder} type="text" />
            <div className={css.sound_img__adder}>
              <div className={css.sound_add}>
                <div className={css.sound_add_text}>Sound: </div>
                <div className={css.input__outer}>
                  <input onChange={handleNewSound} className={css.sound_add_input} type="file" />
                  Change Sound
                </div>
              </div>
              <div className={css.image_add}>
                <div className={css.image_add_text}>Image: </div>
                <div className={css.input__outer}>
                  <input onChange={handleNewImage} className={css.sound_add_input} type="file" />
                  Change Image
                </div>
              </div>
            </div>
            <div className={css.buttons__adder}>
              <div onClick={changerHeandler} className={css.cancel__adder}>
                Cancel
              </div>
              <div onClick={handleChangeWord} className={css.add__adder}>
                Add
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleWordAdmin;
