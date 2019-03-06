import React, {Component} from 'react';
import {Dropdown, Grid, Input} from 'semantic-ui-react';

class GetDetailsVendor extends Component {
    IDType = [
        {text: 'Adhaar Card', value:'AD'},
        {text: 'Voter ID Card', value:'VO'},
        {text: 'Passport', value:'PA'},
    ];
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
                    <Grid.Column width={12}><Dropdown options={this.IDType} selection style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter ID proof number</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter Infosys Manager's Employee Id</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}/></Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default GetDetailsVendor;
