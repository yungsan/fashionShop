const thumbnail = document.querySelector('#productThumbnail');
const thumbnailFile = document.querySelector('#productThumbnailFile');


thumbnailFile.addEventListener('change', () => {
  
  const [file] = thumbnailFile.files;
  
  if (file) {
    thumbnail.src = URL.createObjectURL(file);
  }
})
