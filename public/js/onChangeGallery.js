const galleryFiles = document.querySelector('#productGalleryFiles');
const productGallery = document.querySelector('#productGallery');

galleryFiles.addEventListener('change', () => {
  const files = [...galleryFiles.files];
  console.log(files);
  const urls = files.map(file => URL.createObjectURL(file));
  console.log(urls);

  for (const file of files){
    const wrap = document.createElement('div');
    wrap.classList.add('galleryPic', 'w-[32%]', 'mb-2', 'h-fit', 'bg-highlight');
    const img = document.createElement('img');
    img.classList.add('w-full', 'h-[100px]', 'object-cover')
    img.src = URL.createObjectURL(file);
    wrap.appendChild(img);
    productGallery.appendChild(wrap);
  }
})

