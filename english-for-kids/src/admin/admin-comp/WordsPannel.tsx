import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import WordsApi from '../../login-api/Words-api';
import { createWord } from '../../redux/actions';
import SingleWordAdmin from './single-word-admin';
import css from './wordspanel.module.css';

const WordsPanel = ({ item, adminName }: any) => {
  const dispatch = useDispatch();
  const [cardAdder, setCardAdder] = useState(false);
  const [newWord, setNewWord] = useState('');
  const [newTranslate, setNewTranslate] = useState('');
  const [newImage, setNewImage] = useState(null) as any;
  const [newSound, setNewSound] = useState(null) as any;
  const [height, setHeight] = useState(0);
  const addNewWordheandler = () => {
    if (cardAdder === false) {
      setCardAdder(true);
    } else {
      setCardAdder(false);
    }
  };
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
  const createStateCard = () => {
    const wordsBody = {
      image: newImage,
      word: newWord,
      translation: newTranslate,
      sound: newSound,
      set_id: item[0],
      user_id: adminName,
    };
    WordsApi.postWord(wordsBody, adminName, item[0]).then((res) => {
      dispatch(createWord(adminName, item[0]));
      addNewWordheandler();
    });
  };

  const renderArr: any = Object.values(item![1])[0];
  const wordsArray = [];

  for (const key of Object.entries(renderArr)) {
    wordsArray.push(key);
  }
  const renderSingleWord = wordsArray.map((item) => {
    return <SingleWordAdmin item={item} adminName={adminName} />;
  });

  return (
    <div className={css.sets}>
      <div className={css.text}>{item[0]}</div>
      <div className={css.gap__words}>
        {renderSingleWord}
        {cardAdder === false ? (
          <div className={css.single__new}>
            <div>Add New Word</div>
            <div onClick={addNewWordheandler} className={css.adder}>
              <div className={css.adder__lin1} />
              <div className={css.adder__lin2} />
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
                    Add Sound
                  </div>
                </div>
                <div className={css.image_add}>
                  <div className={css.image_add_text}>Image: </div>
                  <div className={css.input__outer}>
                    <input onChange={handleNewImage} className={css.sound_add_input} type="file" />
                    Add Image
                  </div>
                </div>
              </div>
              <div className={css.buttons__adder}>
                <div onClick={addNewWordheandler} className={css.cancel__adder}>
                  Cancel
                </div>
                <div onClick={createStateCard} className={css.add__adder}>
                  Add
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default WordsPanel;
