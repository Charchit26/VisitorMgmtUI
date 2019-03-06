import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import DisplayCard from '../DisplayCard';

class SelectVisitor extends Component {
    render() {
        return (
            <div>
                <p>Please select your visitor type:</p><br/>
                <Card.Group>
                    <DisplayCard header="Family Member" title='FAM' onClick={this.props.onSelect}/>
                    <DisplayCard header="Interviewee" title='INT' onClick={this.props.onSelect}/>
                    <DisplayCard header="Vendor" title='VEN' onClick={this.props.onSelect}/>
                    <DisplayCard header="Guest" title='GST' onClick={this.props.onSelect}/>
                </Card.Group>

            </div>
        )
    }
}

export default SelectVisitor;
