import React, {Component} from 'react';
import {Divider, Grid, Input, Segment} from 'semantic-ui-react';
import QRReader from './QRReader';

class Home extends Component {
    componentDidMount() {
        this.inputRef.focus()
    }

    handleRef = (c) => {
        this.inputRef = c
    };

    render() {
        return (
            <Segment placeholder style={{marginTop: '10%'}}>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column width={8} floated='left'>
                        <QRReader/>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle' width={8}>
                        <div>
                            <Input ref={this.handleRef} action={{icon: 'search'}} placeholder='Enter code manually...' style={{width: '80%', height: '60px'}}/>
                        </div>
                    </Grid.Column>
                </Grid>
                <Divider vertical>OR</Divider>
            </Segment>
        )
    }
}

export default Home;
