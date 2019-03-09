import React, {Component} from 'react';
import {Button, Header, Input, Modal} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class EmployeeCheckIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            imageSrc: '',
        }
    }

    handleIdChange = (e) => {
        this.setState({empId: e.target.value})
    };

    handleEmpClick = () => {
        fetch('https://visitor-management-svc.cfapps.io/api/v1/employeeDetails/' + this.state.empId)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                this.props.history.push({pathname: '/empGatePass', props: {details: json},})
            }).catch((err) => {
            console.log(err);
            this.props.history.push({pathname: '/empGatePassError'})
        })
    };

    getEmployeeImage = (imageSrc) => {
        this.setState({imageSrc: imageSrc});
        console.log(imageSrc)
    };

    render() {
        return (
            <div>
                <Modal dimmer='blurring' size='large' open={this.props.modalOpen} onClose={this.props.closeModal}
                       closeIcon>
                    <Modal.Header>Employee Self Check In</Modal.Header>
                    <Modal.Content image>
                        {/*<WebcamCapture setImage={this.getEmployeeImage}/>*/}
                        <Modal.Description>
                            <Header>Enter your employee ID</Header>
                            <br/>
                            <Input autoFocus placeholder='Employee ID...' onChange={this.handleIdChange}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button content='Get My Gate Pass'
                                    positive
                                    onClick={this.handleEmpClick}/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default withRouter(EmployeeCheckIn);
