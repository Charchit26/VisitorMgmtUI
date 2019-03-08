import React, {Component} from 'react';
import SelectVisitor from './FreshVisitorScreens/SelectVisitor';
import {Icon, Segment} from 'semantic-ui-react';
import GetDetailsFamily from './FreshVisitorScreens/GetDetailsFamily';
import GetDetailsInterviewee from './FreshVisitorScreens/GetDetailsInterviewee';
import GetDetailsVendor from './FreshVisitorScreens/GetDetailsVendor';
import GetDetailsGuest from './FreshVisitorScreens/GetDetailsGuest';
import {Link} from 'react-router-dom';
import GatePass from './FreshVisitorScreens/GatePass';
import VisitorRegisterSuccess from './FreshVisitorScreens/VisitorRegisterSuccess';
import ClickPicture from './FreshVisitorScreens/ClickPicture';

class FreshVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageShown: 1,
            visitorType: '',
            modalOpen: false,

            clickPictureModalOpen: false,
            imageSrc: '',
        }
    }

    handleVisitorSelect = (e, data) => {
        this.setState({visitorType: data.title, pageShown: 2});
    };
    handleBackClick = () => {
        this.setState((prevState) => ({pageShown: prevState.pageShown - 1}))
    };

    handleSubmit = (details) => {
        const {imageSrc} = this.state;
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
        }).then(response => response.json())
            .then((json) => {
                console.log(json);
                this.setState({clickPictureModalOpen: true});
            })
    };

    closeModal = () => {
        this.setState({modalOpen: false});
        this.props.history.push('/')
    };

    closePictureModal = () => {
        this.setState({clickPictureModalOpen: false, modalOpen: true});
    };

    setImageSrc = (img) => {
        this.setState({imageSrc: img});
    };

    render() {
        const {pageShown, visitorType} = this.state;
        return (
            <div>
                <Link to='/'>
                    <div style={{marginLeft: '-90%', marginTop: '2%'}}>
                        <p>Home</p>
                        <Icon name='home' size='big'/>
                    </div>
                </Link>
                <Segment.Group horizontal style={{marginTop: '5%'}}>
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
                        {pageShown === 2 && visitorType === 'GST' && <GetDetailsGuest onSubmit={this.handleSubmit}/>}
                        {pageShown === 3 && <GatePass/>}
                        {pageShown === 4 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                    </Segment>
                </Segment.Group>
                <ClickPicture  modalOpen={this.state.clickPictureModalOpen} closeModal={this.closePictureModal} setImageSrc={this.setImageSrc}/>
                <VisitorRegisterSuccess modalOpen={this.state.modalOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}

export default FreshVisitor;
