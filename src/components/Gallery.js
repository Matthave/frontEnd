import React from 'react'

function Gallery() {
  return (
    <section className="gallery">
      <div className="wrapPassion">
        <div className="gallery__passion gallery__passion">
          <h2 className='gallery__text'>PASSION</h2>
        </div>
        <div className="gallery__passion gallery__heart">
          <h2 className='gallery__text'>HEART</h2>
        </div>
        <div className="gallery__passion gallery__obstinacy">
          <h2 className='gallery__text'>TIME</h2>
        </div>
      </div>

      <div className="wrapDuplicate">
        <div className="gallery__passion gallery__passion duplicate">
          <h2 className='gallery__text'>PASSION</h2>
        </div>
        <div className="gallery__passion gallery__heart duplicate">
          <h2 className='gallery__text'>HEART</h2>
        </div>
        <div className="gallery__passion gallery__obstinacy duplicate">
          <h2 className='gallery__text'>TIME</h2>
        </div>
      </div>
    </section>
  )
}

export default Gallery
