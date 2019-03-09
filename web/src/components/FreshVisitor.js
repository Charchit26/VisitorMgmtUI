import React, {Component} from 'react';
import SelectVisitor from './FreshVisitorScreens/SelectVisitor';
import {Icon, Segment} from 'semantic-ui-react';
import GetDetailsFamily from './FreshVisitorScreens/GetDetailsFamily';
import GetDetailsVendor from './FreshVisitorScreens/GetDetailsVendor';
import GetDetailsGuest from './FreshVisitorScreens/GetDetailsGuest';
import {Link} from 'react-router-dom';
import GatePass from './FreshVisitorScreens/GatePass';
import VisitorRegisterSuccess from './FreshVisitorScreens/VisitorRegisterSuccess';
import ClickPicture from './FreshVisitorScreens/ClickPicture';
import GetDetailsEvent from './FreshVisitorScreens/GetDetailsEvent';

class FreshVisitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageShown: 1,
            visitorType: '',
            modalOpen: false,

            clickPictureModalOpen: false,
            imageSrc: '',
            details: {},
        }
    }

    handleVisitorSelect = (e, data) => {
        this.setState({visitorType: data.title, pageShown: 2});
    };
    handleBackClick = () => {
        this.setState((prevState) => ({pageShown: prevState.pageShown - 1}))
    };

    closeModal = () => {
        this.setState({modalOpen: false});
        this.props.history.push('/')
    };

    openPictureModal = (details) => {
        this.setState({details: details, clickPictureModalOpen: true})
    };

    closePictureModal = () => {
        const {imageSrc} = this.state;
        this.setState({details: {...this.state.details, photo: imageSrc}})
        let data = JSON.stringify(this.state.details);
        console.log(data)
        fetch('https://visitor-management-svc.cfapps.io/api/v1/submitRequest',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: data,
            }).then(response => {
            if (response.status === 201) {
                this.setState({clickPictureModalOpen: false, modalOpen: true});
            } else {
                return Promise.reject(response)
            }
        }).catch((err) => {
            console.log(err)
        })
    };

    setImageSrc = (img) => {
        this.setState({imageSrc: img}, this.closePictureModal);
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
                        {pageShown === 2 && visitorType === 'FAM' &&
                        <GetDetailsFamily onSubmit={this.openPictureModal}/>}
                        {pageShown === 2 && visitorType === 'INT' &&
                        <GetDetailsEvent onSubmit={this.openPictureModal}/>}
                        {pageShown === 2 && visitorType === 'VEN' &&
                        <GetDetailsVendor onSubmit={this.openPictureModal}/>}
                        {pageShown === 2 && visitorType === 'GST' &&
                        <GetDetailsGuest onSubmit={this.openPictureModal}/>}
                        {pageShown === 3 && <GatePass/>}
                        {pageShown === 4 && <SelectVisitor onSelect={this.handleVisitorSelect}/>}
                    </Segment>
                </Segment.Group>
                <ClickPicture modalOpen={this.state.clickPictureModalOpen}
                              setImageSrc={this.setImageSrc}/>
                <VisitorRegisterSuccess modalOpen={this.state.modalOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}

export default FreshVisitor;
