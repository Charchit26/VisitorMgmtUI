import React, {Component} from 'react';
import {Divider, Grid, Header, Icon, Input, Segment} from 'semantic-ui-react';
import QRReader from './QRReader';
import {Link} from 'react-router-dom';

class ApprovedVisitor extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <div style={{marginLeft: '-90%', marginTop: '2%'}}>
                        <p>Home</p>
                        <Icon name='home' size='big'/>
                    </div>
                </Link>
                <br/>
                <br/>
                <br/>
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column width={8} floated='left'>
                            <QRReader/>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle' width={8}>
                            <div>
                                <Header as="h2">
                                    <Icon name='search'/>
                                    Enter Code manually
                                </Header><br/>
                                <Input autoFocus action={{icon: 'search', size: 'huge'}}
                                       placeholder='Search...'
                                       style={{width: '70%', height: '60px', fontSize: '170%'}}/>
                            </div>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical style={{fontSize: '150%'}}>OR</Divider>
                </Segment>
            </div>
        )
    }
}

export default ApprovedVisitor;
