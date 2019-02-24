import React, { Component } from 'react';
import QrReader from "react-qr-reader";
import { Input, Icon, Grid, Button } from 'semantic-ui-react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          delay: 300,
          result: "No result"
        };
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf(' electron/') > -1) {
            // Electron-specific code
            console.log("I am running inside electron")
        } else {
            console.log("I am running in a web browser")
        }
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
            <Grid divided='vertically' verticalAlign='middle'>
                <div align='center' style={{width: '100%', paddingBottom: '4%', paddingTop: '5%', backgroundColor: 'darkGreen', color: 'white'}}>
                    <Grid.Row  style={{width: '30%', marginLeft: '35%', marginRight: '35%'}}>
                        <h1>Welcome To ....</h1> 
                        <br/>
                        
                    </Grid.Row>
                </div>
                <Grid.Row centered columns={2}>
                    <Grid.Column floated='left'>
                        <div align='center' style={{marginLeft: '15%', marginRight: '15%', marginTop: '5%'}}>
                            <div style={{fontWeight: 'bold', marginBottom: '3%'}}> Already generated QR code? Scan it here...</div>
                            <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.handleScan} style={{width: '100%', height: '100%'}}>
                            </QrReader> 
                        </div>
                        </Grid.Column>
                        <Grid.Column floated='right'>
                            <Input size='large' style={{width: '75%'}} icon={<Icon name='arrow right' bordered link 
                            style={{color: 'green'}}/>} placeholder='OR Enter your code manually...' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <div align='center' style={{marginLeft: '15%', marginRight: '15%', marginTop: '5%'}}>
                            <div style={{fontWeight: 'bold', fontSize: '200%', marginBottom: '10%'}}> Fresh visitor? </div>
                            <a href='/newVisitor'><Button positive>Click Here</Button></a>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Home;