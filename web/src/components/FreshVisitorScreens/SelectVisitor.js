import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import DisplayCard from '../DisplayCard';

class SelectVisitor extends Component {
    render() {
        return (
            <div>
                <h1><u>Please select your visitor type:</u></h1><br/><br/>
                <Card.Group centered>
                    <DisplayCard header="Family Member" title='FAM' onClick={this.props.onSelect} image='/images/family.png'/>
                    <DisplayCard header="Interviewee" title='INT' onClick={this.props.onSelect} image='/images/interview.png'/>
                    <DisplayCard header="Vendor" title='VEN' onClick={this.props.onSelect} image='/images/vendor.png'/>
                    <DisplayCard header="Guest" title='GST' onClick={this.props.onSelect} image='/images/guest.png'/>
                </Card.Group>
                <br/>
            </div>
        )
    }
}

export default SelectVisitor;
