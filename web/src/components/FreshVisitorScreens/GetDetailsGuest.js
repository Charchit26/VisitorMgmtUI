import React, {Component} from 'react';
import {Button, Dropdown, Grid, Input} from 'semantic-ui-react';
import {DateTimeInput} from 'semantic-ui-calendar-react';
import {IDType} from '../../constants/IDProofType';

class GetDetailsGuest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeIn: '',
            timeOut: '',
            submittable: false,

            name: '',
            email: '',
            phoneNum: '',
            idType: 'AD',
            idNumber: '',
            refEmpId: '',
            emailError: false,
            phoneNumError: false,
        }
    }

    checkErrors = () => {
        const {name, email, phoneNum, idType, idNumber, refEmpId, timeOut, emailError, phoneNumError} = this.state;
        if (name && email && phoneNum && idType && idNumber && refEmpId && timeOut && !emailError && !phoneNumError) {
            this.setState({submittable: true});
        } else {
            this.setState({submittable: false});
        }
    };

    handleNameChange = (e) => {
        this.setState({name: e.target.value}, this.checkErrors);
    };

    handleEmailChange = (e) => {
        this.setState({email: e.target.value}, this.checkErrors);
        let regex = new RegExp(/\S+@\S+\.\S+/);
        if (!regex.test(e.target.value)) {
            this.setState({emailError: true}, this.checkErrors);
        } else {
            this.setState({emailError: false}, this.checkErrors);
        }
    };

    handlePhoneNumChange = (e) => {
        this.setState({phoneNum: e.target.value}, this.checkErrors);

        let regex = new RegExp(/^[\d\s+]*$/);
        if (!regex.test(e.target.value)) {
            this.setState({phoneNumError: true}, this.checkErrors);
        } else {
            this.setState({phoneNumError: false}, this.checkErrors);
        }
    };

    handleIDTypeChange = (e) => {
        this.setState({idType: e.target.value}, this.checkErrors);
    };

    handleIDProofNumChange = (e) => {
        this.setState({idNumber: e.target.value}, this.checkErrors);
    };

    handleRefEmpIDChange = (e) => {
        this.setState({refEmpId: e.target.value}, this.checkErrors);
    };

    handleTimeOutChange = (e, {name, value}) => {
        this.setState({timeOut: value}, this.checkErrors);
    };

    handleSubmit = () => {
        let details = {

        }
        this.props.onSubmit(details);
    };

    render() {
        const {timeOut, submittable, name, email, phoneNum, idType, idNumber, refEmpId, emailError, phoneNumError} = this.state;
        return (
            <Grid style={{fontSize: '140%'}}>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your name</Grid.Column>
                    <Grid.Column width={12}><Input autoFocus style={{width: '100%'}} value={name}
                                                   onChange={this.handleNameChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your email</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}} error={emailError}
                                                   value={email}
                                                   onChange={this.handleEmailChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your phone num</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}} value={phoneNum} error={phoneNumError}
                                                   onChange={this.handlePhoneNumChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Select ID proof type</Grid.Column>
                    <Grid.Column width={12}><Dropdown options={IDType} selection
                                                      style={{width: '100%'}} value={idType}
                                                      onChange={this.handleIDTypeChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter ID proof number</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}} value={idNumber}
                                                   onChange={this.handleIDProofNumChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter reference employee's Id</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}} value={refEmpId}
                                                   onChange={this.handleRefEmpIDChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Expected Time out</Grid.Column>
                    <Grid.Column width={12}>
                        <DateTimeInput
                            closable
                            name="dateTime"
                            placeholder="Date Time"
                            iconPosition="left"
                            value={timeOut}
                            onChange={this.handleTimeOutChange}
                            style={{width: '100%'}}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button type="submit" disabled={!submittable} content="Submit"
                                onClick={this.props.onSubmit}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default GetDetailsGuest;
