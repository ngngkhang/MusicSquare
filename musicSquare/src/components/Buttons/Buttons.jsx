// import React from 'react'
import './Buttons.css'
const Buttons = () => {
  return (
    <div className="buttons">
  <div className="random-track" onClick="randomTrack()">
    <i className="fas fa-random fa-2x" title="random" />
  </div>
  <div className="prev-track" onClick="prevTrack()">
    <i className="fa fa-step-backward fa-2x" />
  </div>
  <div className="playpause-track" onClick="playpauseTrack()">
    <i className="fa fa-play-circle fa-5x" />
  </div>
  <div className="next-track" onClick="nextTrack()">
    <i className="fa fa-step-forward fa-2x" />
  </div>
  <div className="repeat-track" onClick="repeatTrack()">
    <i className="fa fa-repeat fa-2x" title="repeat" />
  </div>
</div>

  )
}

export default Buttons