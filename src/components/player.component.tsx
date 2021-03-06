import React from "react";
import ClassNames from "classnames";

interface IProps {
  playStatus: string;
  backward: any;
  togglePlay: any;
  stop: any;
  random: any;
  forward: any;
}

class Player extends React.Component<IProps> {
  render() {
    const playPauseClass = ClassNames({
      "fa fa-play": this.props.playStatus === "PLAYING" ? false : true,
      "fa fa-pause": this.props.playStatus === "PLAYING" ? true : false
    });

    return (
      <div className="player">
        <div className="player__backward">
          <button onClick={this.props.backward}>
            <i className="fa fa-backward" />
          </button>
        </div>
        <div className="player__main">
          <button onClick={this.props.togglePlay}>
            <i className={playPauseClass} />
          </button>
          <button onClick={this.props.stop}>
            <i className="fa fa-stop" />
          </button>
          <button onClick={this.props.random}>
            <i className="fa fa-random" />
          </button>
        </div>
        <div className="player__forward">
          <button onClick={this.props.forward}>
            <i className="fa fa-forward" />
          </button>
        </div>
      </div>
    );
  }
}

export default Player;
