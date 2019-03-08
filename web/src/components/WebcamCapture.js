import React from 'react';
import Webcam from "react-webcam";

class WebcamCapture extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.props.setImage(imageSrc)
    };

    render() {
        const videoConstraints = {
            facingMode: "user"
        };

        return (
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                    videoConstraints={videoConstraints}
                />
                <button onClick={this.capture}>Click Me!</button>
            </div>
        );
    }
}

export default WebcamCapture;
