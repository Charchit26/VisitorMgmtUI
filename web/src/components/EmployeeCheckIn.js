import React, {Component} from 'react';
import {Button, Header, Input, Modal} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class EmployeeCheckIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAdd: '',
            imageSrc: '',
            showGatePass: false,
        }
    }

    handleEmailChange = (e) => {
        this.setState({emailAdd: e.target.value})
    };

    handleEmpClick = () => {
        console.log(this.state.emailAdd)
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                this.setState({showGatePass: true})
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
                            <Header>Enter your official email ID</Header>
                            <Input label={{basic: true, content: '@infy.com'}}
                                   labelPosition='right' placeholder='email id...' onChange={this.handleEmailChange}/>
                            <br/>
                            <br/>
                            <br/>
                            <Link to={{pathname: '/gatePass', details: {name: this.state.emailAdd}}}>
                                <Button content='Get My Gate Pass'
                                        positive
                                        onClick={this.handleEmpClick}/>
                            </Link>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default EmployeeCheckIn;
