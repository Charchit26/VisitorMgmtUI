import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import WebcamCapture from '../WebcamCapture';

class ClickPicture extends Component {

    getEmployeeImage = (imageSrc) => {
        this.props.setImageSrc(imageSrc);
        this.props.closeModal();
        console.log(imageSrc)
    };

    render() {
        return (
            <div>
                <Modal dimmer='blurring' size='large' closeOnEscape={false}
                       closeOnDimmerClick={false} open={this.props.modalOpen} onClose={this.props.closeModal}>
                    <Modal.Header>Say Cheeeeeeeese....</Modal.Header>
                    <Modal.Content image>
                        <WebcamCapture setImage={this.getEmployeeImage}/>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default withRouter(ClickPicture);
