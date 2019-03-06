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
            <div align="center">
                <div style={{fontWeight: 'bold', fontSize: '170%', marginBottom: '3%'}}> Please scan your QR code
                    here...
                </div><br/>
                <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.handleScan}
                          style={{width: '80%', height: '80%'}}>
                </QrReader>
            </div>
        )
    }
}

export default QRReader;
