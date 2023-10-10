import './SliderContainer.css'

const SliderContainer = () => {
  return (
    <>
  <div className="slider_container">
    <div className="current-time">00:00</div>
    <input
      type="range"
      min={1}
      max={100}
      defaultValue={0}
      className="seek_slider "
      onChange="seekTo()"
    />
    <div className="total-duration">00:00</div>
  </div>
  <div className="slider_container">
    <i className="fa fa-volume-down" />
    <input
      type="range"
      min={1}
      max={100}
      defaultValue={99}
      className="volume_slider"
      onChange="setVolume()"
    />
    <i className="fa fa-volume-up" />
  </div>
</>
  )
}

export default SliderContainer