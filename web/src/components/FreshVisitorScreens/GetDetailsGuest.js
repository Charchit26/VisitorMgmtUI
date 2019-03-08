import React, {Component} from 'react';
import {Button, Checkbox, Dropdown, Grid, Input, Message} from 'semantic-ui-react';
import {DateTimeInput} from 'semantic-ui-calendar-react';
import {IDType, THIS_CITY} from '../../constants/Constants';

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
            eccReqChecked: false,

            jobLevelError: false,
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

    handleECCReqChange = () => {
        const {eccReqChecked} = this.state;
        this.setState({eccReqChecked: !eccReqChecked});
    };

    checkJobLevel = (e) => {
        fetch('https://visitor-management-svc.cfapps.io/api/v1/searchEmployee/' + e.target.value + '@infosys.com', {
            method: 'GET',
        })
            .then(response => response.json())
            .then((json) => {
                if (json.jobLevel && json.jobLevel >= 6) {
                    this.setState({jobLevelError: false})
                } else {
                    this.setState({jobLevelError: true})
                }
            })
            .catch((err) => {
                console.log(err)
                this.setState({jobLevelError: true})
            })
    };

    handleSubmit = () => {
        const {name, email, phoneNum, idType, idNumber, refEmpId, timeOut, eccReqChecked} = this.state;
        let details = {
            visitorType: "Guest",
            name: name,
            photo: '',
            dateTimeAllowedFrom: new Date().toISOString(),
            dateTimeAllowedTo: timeOut,
            idType: idType,
            govtId: idNumber,
            phoneNumber: phoneNum,
            email: email,
            accomodationReq: eccReqChecked,
            empMail: refEmpId,
            location: THIS_CITY
        };
        this.props.onSubmit(details);
    };

    render() {
        const {eccReqChecked, timeOut, submittable, name, email, phoneNum, idType, idNumber, refEmpId, emailError, phoneNumError, jobLevelError} = this.state;
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
                    <Grid.Column width={4}>Enter reference employee's email</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}} value={refEmpId} error={jobLevelError}
                                                   label={{basic: true, content: '@infosys.com'}}
                                                   labelPosition='right'
                                                   onChange={this.handleRefEmpIDChange}
                                                   onBlur={this.checkJobLevel}/></Grid.Column>
                    {jobLevelError &&
                    <Message style={{marginLeft: '1%'}} negative size='mini'>
                        <p>Please enter a valid email ID of an employee with JL >= 6</p>
                    </Message>}
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
                    <Grid.Column width={12}>
                        <Checkbox checked={eccReqChecked}
                                  style={{fontSize: '100%', marginTop: '4%', marginBottom: '3%', marginLeft: '7%'}}
                                  toggle label='I require accommodation in ECC' onChange={this.handleECCReqChange}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button type="submit" disabled={!submittable} content="Submit" positive size="huge"
                                onClick={this.handleSubmit}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default GetDetailsGuest;
