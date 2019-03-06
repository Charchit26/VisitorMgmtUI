import React, {Component} from 'react';
import SelectVisitor from './FreshVisitorScreens/SelectVisitor';
import {Icon, Segment} from 'semantic-ui-react';
import GetDetailsFamily from './FreshVisitorScreens/GetDetailsFamily';
import GetDetailsInterviewee from './FreshVisitorScreens/GetDetailsInterviewee';
import GetDetailsVendor from './FreshVisitorScreens/GetDetailsVendor';
import GetDetailsGuest from './FreshVisitorScreens/GetDetailsGuest';

class FreshVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageShown: 1,
            visitorType: '',
        }
    }

    handleVisitorSelect = (e, data) => {
        console.log(data)
        this.setState({visitorType: data.title, pageShown: 2});
    };
    handleBackClick = () => {
        this.setState((prevState) => ({pageShown: prevState.pageShown - 1}))
    };

    render() {
        const {pageShown, visitorType} = this.state;
        return (
            <Segment.Group horizontal style={{marginTop: '20%'}}>
                {pageShown !== 1 &&
                <Segment>
                    <Icon size='huge' name='arrow alternate circle left' onClick={this.handleBackClick}/>
                </Segment>
                }
                <Segment style={{width: '70%'}}>
                    {pageShown === 1 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                    {pageShown === 2 && visitorType === 'FAM' && <GetDetailsFamily/>}
                    {pageShown === 2 && visitorType === 'INT' && <GetDetailsInterviewee/>}
                    {pageShown === 2 && visitorType === 'VEN' && <GetDetailsVendor/>}
                    {pageShown === 2 && visitorType === 'GST' && <GetDetailsGuest/>}
                    {pageShown === 3 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                    {pageShown === 4 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                </Segment>
                {/*<Segment><Icon size='huge' name='arrow alternate circle right'/></Segment>*/}
            </Segment.Group>
        )
    }
}

export default FreshVisitor;
