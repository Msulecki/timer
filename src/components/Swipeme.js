import React, { Component } from 'react';
import Dots from './Dots'
import Results from './Results'
import ResultsList from './ResultsList'
import Cube from './Cube'
import '../style/Swipeme.scss';

class Swipeme extends Component {
  state = {
    slidesNumber: 0,
    activeSlide: 0
  }
  componentDidMount() {
    this.down = false
    this.up = false
    this.drag = false
    this.dragStartPosition = 0
    this.slidePosition = 0
    this.transitionTime = '.5s'
    this.slideChanged = false
    this.slideNumber = 0
    this.handleMouse()
  }
  componentDidUpdate() {

  }
  handleMouse = (event, e) => {
    const container = document.querySelector('.swipeme__content') //container for slides
    this.slideNumber = container.childNodes.length // container childrens = number of slides
    this.setState({
      slidesNumber: container.childNodes.length
    })
    const slide = document.querySelector('.swipeme__slide')
    const relativePosition = this.margin + (this.slidePosition * slide.offsetWidth)
    let pageX
    if (typeof e !== 'undefined') {
      if (typeof e.pageX === 'undefined' && typeof e.touches[0] !== 'undefined') pageX = e.touches[0].pageX
      if (typeof e.pageX !== 'undefined') pageX = e.pageX
    }
    if (event === 'down') { // clicked / touched
      this.down = true
      this.up = false
      this.dragStartPosition = pageX
      slide.style.transition = '0s'
      //console.log(e.touches[0].pageX);

    }
    if (event === 'up') { // reset events then mouseup / touchend
      this.down = false
      this.up = true
      this.drag = false



      if (Math.abs(relativePosition) > 50 && (this.dragStartPosition - pageX) !== 0) {
        if (relativePosition < 0 && this.slidePosition < this.slideNumber - 1) {
          this.slidePosition++
        }
        if (relativePosition > 0 && this.slidePosition > 0) {
          this.slidePosition--
        }
        this.setState({
          activeSlide: this.slidePosition
        })
      }
      slide.style.marginLeft = `${-(this.slidePosition * slide.offsetWidth)}px`
      slide.style.transition = this.transitionTime

    }
    if (event === 'move' && this.down === true) { // detect drag

      this.drag = true
      this.margin = (pageX - this.dragStartPosition) - (this.slidePosition * slide.offsetWidth)

      // console.log(this.slidePosition, relativePosition, this.margin, this.offsetMargin);
      slide.style.marginLeft = `${this.margin}px`
      // console.log(-(this.margin % slide.offsetWidth), (slide.offsetWidth / 4));

    }
  }

  render() {
    return (
      <>
        <div className="swipeme">
          <div className="swipeme__content">

            <div className="swipeme__slide"
              onMouseDown={this.handleMouse.bind(this, 'down')}
              onMouseUp={this.handleMouse.bind(this, 'up')}
              onMouseMove={this.handleMouse.bind(this, 'move')}
              onTouchStart={this.handleMouse.bind(this, 'down')}
              onTouchEnd={this.handleMouse.bind(this, 'up')}
              onTouchMove={this.handleMouse.bind(this, 'move')}>
              <Cube cubeGrid={this.props.cubeGrid} />
              <Results results={this.props.results} />
            </div>

            <div className="swipeme__slide"
              onMouseDown={this.handleMouse.bind(this, 'down')}
              onMouseUp={this.handleMouse.bind(this, 'up')}
              onMouseMove={this.handleMouse.bind(this, 'move')}
              onTouchStart={this.handleMouse.bind(this, 'down')}
              onTouchEnd={this.handleMouse.bind(this, 'up')}
              onTouchMove={this.handleMouse.bind(this, 'move')}>
              <ResultsList results={this.props.results} />
            </div>

          </div>
        </div>


        <Dots length={this.state.slidesNumber} active={this.state.activeSlide} />


      </>
    );
  }
}

export default Swipeme;
