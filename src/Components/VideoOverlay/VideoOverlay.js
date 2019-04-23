import React, { Component } from "react";
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import "./VideoOverlay.css";



class VideoOverlay extends Component {

    constructor() {
        super(...arguments);
    
        this.state = {
          lightboxOpen: false
        };
      }


    render () {
        return (
            <div className="VideoOverlay">
              <button onClick={() => { this.setState({ lightboxOpen: true }); }}>Open Lightbox</button>
              {
                this.state.lightboxOpen &&
                <ReactImageVideoLightbox
                  data={[
                    { url: 'https://www.nhl.com/video/embed/c-67514503&autoplay=true', type: 'video', altTag: 'placeholder image' }]}
                  startIndex={0}
                  showResourceCount={false}
                  onCloseCallback={() => { this.setState({ lightboxOpen: false }); }} />
              }
            </div>
        );
    }
}

export default VideoOverlay;