import React, {Component} from 'react';
import {Divider, Grid, Icon, Input, Segment} from 'semantic-ui-react';
import QRReader from './QRReader';

class Home extends Component {
    render() {
        return (
            <Segment placeholder style={{marginTop: '10%'}}>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column width={8} floated='left'>
                        <QRReader/>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle' width={8} >
                        <div style={{width: '100%'}} >
                        <Input action={{ icon: 'search' }} placeholder='Enter code manually...' />
                        </div>
                    </Grid.Column>
                </Grid>
                <Divider vertical>OR</Divider>
            </Segment>
        )
    }
}

export default Home;
