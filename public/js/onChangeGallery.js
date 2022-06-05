function handleRemove(){
  const removeBtns = document.querySelectorAll('.removeBtn');
  const galleryImageWrap = document.querySelectorAll('.galleryPic');

  removeBtns.forEach((el, i) => {
    el.addEventListener('click', () => {
      
      galleryImageWrap[i].remove();

    })
  })
}

function showImages(){
  const galleryFiles = document.querySelector('#productGalleryFiles');

  galleryFiles.addEventListener('change', (e) => {
    let files = [...galleryFiles.files];

    for (const i in files){
      createWrap(files[i]);
    }
    
  })
}



function createWrap(file){
  const url = URL.createObjectURL(file);

  if (form.getAttribute('isEdit') === 'true') {
    beforeSubmit();
  }
  
  const wrap = document.createElement('div');
  wrap.classList.add('galleryPic', 'w-[32%]', 'mb-2', 'h-fit', 'bg-highlight', 'relative');
  
  const img = `<img class='w-full h-[100px] object-cover galleryImage' src=${url}>`;
  const btn = "<button class='absolute right-0 top-2 removeBtn' type='button'><svg class='h-7 w-7 text-red-500' xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clip-rule='evenodd'></path></svg></button>";
  wrap.innerHTML = btn.trim();
  wrap.innerHTML += img.trim();
  document.querySelector('#productGallery').appendChild(wrap);
  
  handleRemove();

}
