import React, {Component} from 'react';
import {Dropdown, Grid, Input} from 'semantic-ui-react';
import {DateTimeInput} from 'semantic-ui-calendar-react';

class GetDetailsGuest extends Component {
    IDType = [
        {text: 'Adhaar Card', value: 'AD'},
        {text: 'Voter ID Card', value: 'VO'},
        {text: 'Passport', value: 'PA'},
    ];

    state={
        timeOut: this.props.timeOut,
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.timeOut) {
            this.setState({timeOut: nextProps.timeOut})
        }
    }

    render() {
        return (
            <Grid style={{fontSize: '140%'}}>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your name</Grid.Column>
                    <Grid.Column width={12}><Input autoFocus style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your email</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your phone num</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Select ID proof type</Grid.Column>
                    <Grid.Column width={12}><Dropdown options={this.IDType} selection
                                                      style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter ID proof number</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter reference employee's Id</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Expected Time out</Grid.Column>
                    <Grid.Column width={12}>
                        <DateTimeInput
                            name="dateTime"
                            placeholder="Date Time"
                            iconPosition="left"
                            onChange={this.props.handleTimeOutChange}
                            style={{width: '100%'}}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default GetDetailsGuest;
