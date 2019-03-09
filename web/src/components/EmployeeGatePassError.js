import React, {Component} from 'react';
import {Icon, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class EmployeeGatePassError extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <div style={{marginLeft: '-90%', marginTop: '2%'}}>
                        <p>Home</p>
                        <Icon name='home' size='big'/>
                    </div>
                </Link>
                <Message negative>
                    <Message.Header>We're sorry we can't verify this Employee ID at this time</Message.Header>
                    <p>Either the employee Id mentioned is wrong or there is some issue with the server</p>
                </Message>
            </div>
        )
    }
}

export default EmployeeGatePassError;
