import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SingleCategoryComp from './single-categ-comp';
import css from './admin.module.css';
import SetsApi from '../../login-api/Sets-api';
import { createPost } from '../../redux/actions';

const AdminPanel = ({
  dataCard,
  adminName,
  rerenderHeandler,
  changeColor,
  setCorrectPath,
}: any) => {
  const dispatch = useDispatch();
  const [createSection, setCreateSection] = useState(false);
  const [selectFile, setSElectFile] = useState(null) as any;
  const [bease64State, setBase64] = useState(null) as any;
  const [categoryName, setCategoryName] = useState('');
  const handleCategoreName = (e: any) => {
    setCategoryName(e.target.value);
  };
  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newSrc = reader.result;
      setBase64(newSrc);
    };
  };

  const changeSection = () => {
    if (createSection === false) {
      setCreateSection(true);
    } else {
      setCreateSection(false);
    }
  };
  const createCategoryHeandler = () => {
    const body = {
      set: categoryName,
      image: bease64State,
      user_id: adminName,
    };
    SetsApi.postSet(body, adminName);
    setTimeout(() => {
      dispatch(createPost(adminName));
    }, 0);
    rerenderHeandler();
  };

  const arr = [];
  for (const key of Object.entries(dataCard.sets)) {
    arr.push(key);
  }
  const singleSet = arr.map((item: any) => {
    return (
      <SingleCategoryComp
        item={item}
        adminName={adminName}
        rerenderHeandler={rerenderHeandler}
        changeColor={changeColor}
        setCorrectPath={setCorrectPath}
      />
    );
  });

  return (
    <div className={css.sets}>
      {singleSet}
      <div className={css.single}>
        {createSection === false ? (
          <div>Create New Category</div>
        ) : (
          <div className={css.categoryChanger}>
            <input
              onChange={handleCategoreName}
              value={categoryName}
              className={css.inputCategory}
              placeholder="Category"
              type="text"
            />
            <div className={css.buttonImage}>
              <input
                className={css.upload}
                onChange={handleFile}
                type="file"
                placeholder="Add Image"
              />
              <div className={css.add}>Add Image</div>
            </div>
          </div>
        )}

        {createSection === false ? (
          <div onClick={changeSection} className={css.cross}>
            <div className={css.line1} />
            <div className={css.line2} />
          </div>
        ) : (
          <div className={css.buttons}>
            <div onClick={changeSection} className={css.cancel}>
              Cancel
            </div>
            <div onClick={createCategoryHeandler} className={css.create}>
              Create
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminPanel;
