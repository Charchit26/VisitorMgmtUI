import React, {Component} from 'react';
import {Divider, Grid, Header, Icon, Input, Segment} from 'semantic-ui-react';
import QRReader from './QRReader';
import {Link} from 'react-router-dom';

class ApprovedVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitorId: '',
        }
    }
    handleSearch = () => {
        const {visitorId} = this.state;
        console.log(visitorId)

        //TODO API call for visitor ID
        fetch('https://visitor-management-svc.cfapps.io/api/v1/employeeDetails/' + 744781)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                this.props.history.push({pathname: '/gatePass', props: {details: json},})
            }).catch((err) => {
            console.log(err);
            this.props.history.push({pathname: '/empGatePassError'})
        })
    };

    handleQRSearch = () => {
        //TODO API call for QR code
        fetch('https://visitor-management-svc.cfapps.io/api/v1/employeeDetails/' + 744781)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                this.props.history.push({pathname: '/gatePass', props: {details: json},})
            }).catch((err) => {
            console.log(err);
            this.props.history.push({pathname: '/empGatePassError'})
        })
    };

    handleInputChnage = (e) => {
        this.setState({visitorId: e.target.value})
    };

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
                            <QRReader handleQRsearch={this.handleQRSearch}/>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle' width={8}>
                            <div>
                                <Header as="h2">
                                    <Icon name='search'/>
                                    Enter Code manually
                                </Header><br/>
                                <Input autoFocus action={{icon: 'search', size: 'huge', onClick: this.handleSearch}}
                                       placeholder='Search...'
                                       value={this.state.visitorId}
                                       onChange={this.handleInputChnage}
                                       style={{width: '70%', height: '60px', fontSize: '170%'}} />
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
