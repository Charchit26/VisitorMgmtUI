import React from 'react';
import Webcam from "react-webcam";
import {Button} from 'semantic-ui-react';

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
                    style={{marginLeft: '100%'}}
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                    imageSmoothing={false}
                    videoConstraints={videoConstraints}
                /><br/>
                <Button style={{marginLeft: '125%'}} size="huge" onClick={this.capture}>Click Me!</Button>
            </div>
        );
    }
}

export default WebcamCapture;
