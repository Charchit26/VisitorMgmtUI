import React, {Component} from 'react';
import {Grid, Icon, Input, Segment} from 'semantic-ui-react';
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
                        <Input size='huge' style={{width: '100%'}} icon={<Icon name='search' inverted circular link/>} placeholder='Search...'/>
                    </Grid.Column>
                </Grid>

            </Segment>
        )
    }
}

export default Home;
