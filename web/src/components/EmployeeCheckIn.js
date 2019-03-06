import React, {Component} from 'react';
import {Header, Input, Modal} from 'semantic-ui-react';
import WebcamCapture from '../components/WebcamCapture';

class EmployeeCheckIn extends Component {
    render() {
        return (
            <div>
                <Modal dimmer='blurring' size='large' open={this.props.modalOpen} onClose={this.props.closeModal} closeIcon>
                <Modal.Header>Employee Self Check In</Modal.Header>
                <Modal.Content image>
                    <WebcamCapture setImage={this.getEmployeeImage}/>
                    <Modal.Description>
                        <Header>Enter the employee ID</Header>
                        <Input action='Search' placeholder='Search...'/>
                    </Modal.Description>
                </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default EmployeeCheckIn;
