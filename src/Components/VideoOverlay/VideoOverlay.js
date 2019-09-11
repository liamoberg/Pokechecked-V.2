import React, { Component } from "react";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import Playbtn from "../SVG components/playbtn";
import "./VideoOverlay.css";
import { valueFromNode } from "apollo-utilities";

class VideoOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxOpen: false
    };
  }

  render() {
    const videoUrl = this.props.url;
    return (
      <div className="VideoOverlay">
        <button
          onClick={() => {
            this.setState({ lightboxOpen: true });
          }}
        >
          <Playbtn />
        </button>
        {this.state.lightboxOpen && (
          <ReactImageVideoLightbox
            data={[
              {
                url: videoUrl,
                type: "video",
                altTag: "placeholder image"
              }
            ]}
            startIndex={0}
            showResourceCount={false}
            onCloseCallback={() => {
              this.setState({ lightboxOpen: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default VideoOverlay;
