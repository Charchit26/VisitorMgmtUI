import React, {Component} from 'react';
import {
    Alert,
    Dimensions,
    LayoutAnimation,
    Linking,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {BarCodeScanner, Permissions} from 'expo';

export default class App extends Component {
    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
    };

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            let data = JSON.stringify({
                "qrString": result.data
            });
            fetch('https://qr-manager.cfapps.io/qr-manager/verify',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                    body: data
                })
                .then(response => {
                    if(response.status === 200) {
                        response.json()
                    } else {
                        return Promise.reject(response)
                    }
                })
                .then(() => {
                    alert('Valid QR!!');
                })
                .catch((err) => {
                    console.log('Erorr Occurred ----------> ', err);
                    alert('Invalid QR OR something went wrong ')

                });
            this.setState({lastScannedUrl: result.data});
        }
    };

    render() {
        return (
            <View style={styles.container}>

                {this.state.hasCameraPermission === null
                    ? <Text>Requesting for camera permission</Text>
                    : this.state.hasCameraPermission === false
                        ? <Text style={{color: '#fff'}}>
                            Camera permission is not granted
                        </Text>
                        : <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{
                                height: Dimensions.get('window').height - 700,
                                width: Dimensions.get('window').width - 150,
                            }}
                        />}

                {this._maybeRenderUrl()}

                <StatusBar hidden/>
            </View>
        );
    }

    _handlePressUrl = () => {
        Alert.alert(
            'Open this URL?',
            this.state.lastScannedUrl,
            [
                {
                    text: 'Yes',
                    onPress: () => Linking.openURL(this.state.lastScannedUrl),
                },
                {
                    text: 'No', onPress: () => {
                    }
                },
            ],
            {cancellable: false}
        );
    };

    _handlePressCancel = () => {
        this.setState({lastScannedUrl: null});
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }

        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                    <Text numberOfLines={1} style={styles.urlText}>
                        {this.state.lastScannedUrl}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={this._handlePressCancel}>
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
});
