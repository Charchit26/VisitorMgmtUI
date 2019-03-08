import React, {Component} from 'react';
import {Message, Modal} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class VisitorRegisterSuccess extends Component {
    render() {
        return (
            <div>
                <Modal dimmer='blurring' size='large' open={this.props.modalOpen} onClose={this.props.closeModal}
                       closeIcon>
                    <Modal.Header>Thank You!</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Message
                                success
                                header='Your visitor registration was successful'
                                content='You may receive a QR code on your email once the request is approved'
                            />
                            <br/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default withRouter(VisitorRegisterSuccess);
