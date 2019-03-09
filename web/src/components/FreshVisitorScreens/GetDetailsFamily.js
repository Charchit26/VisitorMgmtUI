import React, {Component} from 'react';
import {Button, Checkbox, Dropdown, Grid, Input} from 'semantic-ui-react';
import {IDType, THIS_CITY} from '../../constants/Constants';

class GetDetailsFamily extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittable: false,

            name: '',
            email: '',
            phoneNum: '',
            idType: 'AD',
            idNumber: '',
            refEmpId: '',
            timeOut: '',
            emailError: false,
            phoneNumError: false,
        }
    }

    checkErrors = () => {
        const {name, email, phoneNum, idType, idNumber, refEmpId, emailError, phoneNumError} = this.state;
        if (name && email && phoneNum && idType && idNumber && refEmpId && !emailError && !phoneNumError) {
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

    handleTimeOutChange = (e) => {
        let days = parseInt(e.target.value)
        let timeOutDate = new Date().addDays(days).toISOString();
        this.setState({timeOut: timeOutDate}, this.checkErrors);
    };

    handleECCReqChange = () => {
        const {eccReqChecked} = this.state;
        this.setState({eccReqChecked: !eccReqChecked});
    };

    handleSubmit = () => {
        const {name, email, phoneNum, idType, idNumber, refEmpId, timeOut, eccReqChecked} = this.state;
        let details = {
            visitorType: "Family",
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
        const {eccReqChecked, timeOut, submittable, name, email, phoneNum, idType, idNumber, refEmpId, emailError, phoneNumError} = this.state;
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
                    <Grid.Column width={4}>Enter reference employee's email Id</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}} value={refEmpId}
                                                   label={{basic: true, content: '@infosys.com'}}
                                                   labelPosition='right'
                                                   onChange={this.handleRefEmpIDChange}/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>Enter your expected days of stay</Grid.Column>
                    <Grid.Column width={12}><Input style={{width: '100%'}}
                                                   onChange={this.handleTimeOutChange}/></Grid.Column>
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

export default GetDetailsFamily;
