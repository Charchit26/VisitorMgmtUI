import React, {Component} from 'react';
import SelectVisitor from './FreshVisitorScreens/SelectVisitor';
import {Icon, Segment} from 'semantic-ui-react';
import GetDetailsFamily from './FreshVisitorScreens/GetDetailsFamily';
import GetDetailsInterviewee from './FreshVisitorScreens/GetDetailsInterviewee';
import GetDetailsVendor from './FreshVisitorScreens/GetDetailsVendor';
import GetDetailsGuest from './FreshVisitorScreens/GetDetailsGuest';
import GatePass from './FreshVisitorScreens/GatePass';
import {Link} from 'react-router-dom';

class FreshVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageShown: 1,
            visitorType: '',
            timeIn: new Date().getTime(),
            timeOut: (new Date().getTime() + 4 * 60 * 60 * 1000),
        }
    }

    handleVisitorSelect = (e, data) => {
        console.log(data)
        this.setState({visitorType: data.title, pageShown: 2});
    };
    handleBackClick = () => {
        this.setState((prevState) => ({pageShown: prevState.pageShown - 1}))
    };

    handleTimeOutChange = (e, data) => {
        this.setState({timeOut: data.value}, () => console.log(this.state.timeOut));
    };

    handleSubmit = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
        }).then(response => response.json())
            .then((json) => {
                console.log(json);
                this.setState({pageShown: 3});
            })
    };

    render() {
        const {pageShown, visitorType, timeOut} = this.state;
        console.log(timeOut)
        return (
            <div>
                <Link to='/'>
                    <div style={{marginLeft: '-90%', marginTop: '2%'}}>
                        <p>Home</p>
                        <Icon name='home' size='big'/>
                    </div>
                </Link>
                <Segment.Group horizontal style={{marginTop: '20%'}}>
                    {pageShown !== 1 &&
                    <div>
                        <Icon size='huge' name='arrow alternate circle left' onClick={this.handleBackClick}/>
                    </div>
                    }
                    <Segment style={{width: '70%'}}>
                        {pageShown === 1 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                        {pageShown === 2 && visitorType === 'FAM' && <GetDetailsFamily onSubmit={this.handleSubmit}/>}
                        {pageShown === 2 && visitorType === 'INT' &&
                        <GetDetailsInterviewee onSubmit={this.handleSubmit}/>}
                        {pageShown === 2 && visitorType === 'VEN' && <GetDetailsVendor onSubmit={this.handleSubmit}/>}
                        {pageShown === 2 && visitorType === 'GST' && <GetDetailsGuest timeout={timeOut}
                                                                                      handleTimeOutChange={this.handleTimeOutChange}
                                                                                      onSubmit={this.handleSubmit}/>}
                        {pageShown === 3 && <GatePass/>}
                        {pageShown === 4 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                    </Segment>
                    {/*<Segment><Icon size='huge' name='arrow alternate circle right'/></Segment>*/}
                </Segment.Group>
            </div>
        )
    }
}

export default FreshVisitor;
