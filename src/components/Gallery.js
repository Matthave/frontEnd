import React from 'react'

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__passion">
        <h2 className='gallery__text'>PASSION</h2>
        <i class="fab fa-hotjar"></i>
      </div>
      <div className="gallery__passion heart">
        <h2 className='gallery__text'>HEART</h2>
        <i class="fas fa-heart"></i>
      </div>
      <div className="gallery__passion">
        <h2 className='gallery__text'>OBSTINACY</h2>
        <i class="fas fa-hourglass-half"></i>
      </div>
    </section>
  )
}

export default Gallery
