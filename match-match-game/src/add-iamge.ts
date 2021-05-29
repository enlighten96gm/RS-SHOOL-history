import state from './types/state';

type handlerType = (e: MouseEvent) => void
const AddImage = () => {
  const addImageButton: HTMLInputElement = document.querySelector('.save__picture');
  const imageWindow: HTMLImageElement = document.querySelector('.save__picture_img');
  const addImageHeandler: handlerType = () => {
    const file = addImageButton.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newSrc = reader.result;
      imageWindow.innerHTML = '';
      imageWindow.src = `${newSrc}`;
      const base64 = btoa(`${newSrc}`);
      state.data64 = base64;
    };
    reader.readAsDataURL(file);
    imageWindow.style.display = 'block';
  };

  addImageButton.addEventListener('change', addImageHeandler);
};
export default AddImage;
