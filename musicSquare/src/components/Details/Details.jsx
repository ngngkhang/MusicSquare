import "./Details.css";

export default function Details() {
  return (
    <div className="details">
      <div className="now-playing">PLAYING x OF y</div>
      {/* <div class="track-art1"> */}
      <div className="track-art" />
      {/* </div> */}
      <div className="track-name">Track Name</div>
      <div className="track-artist">Track Artist</div>
    </div>
  );
}
