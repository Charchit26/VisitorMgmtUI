import React from 'react';
import QrReader from "react-qr-reader";

class QRReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 300,
            result: "No result"
        };
    }

    handleScan = (data) => {
        if (data) {
            this.setState({
                result: data
            }, console.log(data));
        }
    };
    handleError = (err) => {
        console.error(err);
    };

    render() {
        return (
            <div>
                <div style={{fontWeight: 'bold', fontSize: '150%', marginBottom: '3%'}}> Please scan your QR code
                    here...
                </div>
                <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.handleScan}
                          style={{width: '100%', height: '100%'}}>
                </QrReader>
            </div>
        )
    }
}

export default QRReader;
