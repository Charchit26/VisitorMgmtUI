import React, {Component} from 'react';
import {Button, Divider, Grid, Input, Segment} from 'semantic-ui-react';
import QRReader from './QRReader';

class ApprovedVisitor extends Component {
    componentDidMount() {
        this.inputRef.focus()
    }

    handleRef = (c) => {
        this.inputRef = c
    };

    goBack = () => {
        this.props.history.push('/');
    };


    render() {
        return (
            <div>
                <Button content='Go Back' negative icon={'arrow left'} onClick={this.goBack}
                        style={{marginTop: '10%', marginLeft: '87%', fontSize: '130%'}}/>
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column width={8} floated='left'>
                            <QRReader/>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle' width={8}>
                            <div>
                                <Input ref={this.handleRef} action={{icon: 'search', size: 'huge'}}
                                       placeholder='Enter code manually...'
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
