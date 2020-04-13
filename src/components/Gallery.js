import React, { Component } from 'react'
import Chart from '../pages/Chart'

class Gallery extends Component {
  state = {
    chartVisibility: false,
    chartText: false,
    chartCreate: false,
  }

  constructor() {
    super()
    this.deviceWidth = window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollForGalleryArc, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollForGalleryArc, true)
  }

  scrollForGalleryArc = () => {
    const scrollHeight = window.scrollY
    const galleryOffTop = document.querySelector('.gallery').offsetTop
    const barHeight = document.querySelector('.reference').clientHeight

    if (scrollHeight + (barHeight * 2) > galleryOffTop) {
      this.setState({
        chartCreate: true,
      })
    }

    setTimeout(() => {
      if (scrollHeight + (barHeight * 2) > galleryOffTop) {
        this.setState({
          chartVisibility: true,
          chartText: true,
        })
      } else {
        this.setState({
          chartVisibility: false,
          chartText: false,
        })
      }
    }, 50);
  }

  render() {
    return (
      <section className="gallery">
        <div className="gallery__chartWrap">
          <h2 className={this.state.chartText ? 'gallery__chartText gallery__chartText--visibility' : 'gallery__chartText'}>HEART</h2>
          {this.state.chartCreate ? <Chart
            chartID='canvas1'
            canvasW={this.deviceWidth > 800 ? 320 : 170}
            baseLine={this.deviceWidth > 800 ? 140 : 70}
            angleLine={this.deviceWidth > 800 ? 150 : 80}
            appendix={this.deviceWidth > 800 ? 155 : 85}
            fontSize={this.deviceWidth > 800 ? 30 : 18}
            textInside='HEART'
            visibility={this.state.chartVisibility}
          /> : null}

        </div>
        <div className="gallery__chartWrap">
          <h2 className={this.state.chartText ? 'gallery__chartText gallery__chartText--visibility' : 'gallery__chartText'}>PASSION</h2>
          {this.state.chartCreate ? <Chart
            chartID='canvas2'
            canvasW={this.deviceWidth > 800 ? 320 : 170}
            baseLine={this.deviceWidth > 800 ? 140 : 70}
            angleLine={this.deviceWidth > 800 ? 150 : 80}
            appendix={this.deviceWidth > 800 ? 155 : 85}
            fontSize={this.deviceWidth > 800 ? 30 : 18}
            textInside='PASSION'
            visibility={this.state.chartVisibility}
          /> : null}

        </div>
        <div className="gallery__chartWrap">
          <h2 className={this.state.chartText ? 'gallery__chartText gallery__chartText--visibility' : 'gallery__chartText'}>TIME</h2>
          {this.state.chartCreate ? <Chart
            chartID='canvas3'
            canvasW={this.deviceWidth > 800 ? 320 : 170}
            baseLine={this.deviceWidth > 800 ? 140 : 70}
            angleLine={this.deviceWidth > 800 ? 150 : 80}
            appendix={this.deviceWidth > 800 ? 155 : 85}
            fontSize={this.deviceWidth > 800 ? 30 : 18}
            textInside='TIME'
            visibility={this.state.chartVisibility}
          /> : null}

        </div>
        {/* <div className="wrapPassion">
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
      </div> */}
      </section>
    )
  }
}

export default Gallery
