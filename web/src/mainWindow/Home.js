import React, {Component} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf(' electron/') > -1) {
            // Electron-specific code
            console.log("I am running inside electron")
        } else {
            console.log("I am running in a web browser")
        }
    }

    render() {
        return (

            <Grid columns={2} centered style={{height: '100vh'}}>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={11} style={{marginTop: '-20%', paddingLeft: '10%'}}>
                        <h1>Welcome to &lt;The Company&gt;</h1>
                        <h3>Please choose your visitor type</h3>
                    </Grid.Column>
                    <Grid.Column width={5}
                                 style={{backgroundColor: 'lightGrey', paddingTop: '25%', paddingBottom: '25%'}}>
                        <Link to="/approvedVisitor">
                            <Button content='Pre-approved Visitor' size='huge' primary className='visitor-btn'
                                    style={{marginBottom: '20%', marginLeft: '15%'}}/>
                        </Link>
                        <br/>
                        <Link to="/freshVisitor">
                            <Button content='Fresh Visitor' size='huge' positive className='visitor-btn'
                                    style={{marginBottom: '20%', marginLeft: '15%'}}/>
                        </Link>
                        <br/>
                        <Link to="/employee">
                            <Button content='Employee' size='huge' negative className='visitor-btn'
                                    style={{marginBottom: '20%', marginLeft: '15%'}}/>
                        </Link>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

export default Home;
