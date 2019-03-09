import React, {Component} from 'react';
import {Button, Header, Icon, Image, Item, Segment, Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class GatePass extends Component {
    constructor() {
        super();
        this.state = {
            qrCode: '',
        }
    }

    componentWillMount() {
        this.generateQR(this.props.location.props.details);
    }

    generateQR = (data) => {
        fetch('https://qr-manager.cfapps.io/qr-manager/generateInBytes',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json', 'Accept': 'image/png'},
            })
            .then(response => response.blob())
            .then(blob => {
                let img = URL.createObjectURL(blob)
                this.setState({qrCode: img})
            })
            .catch((err) => {
                console.log(err);
            })
    };

    render() {
        const details = this.props.location.props.details;
        console.log(this.props)
        return (
            <div>
                <Link to='/'>
                    <div style={{marginLeft: '-90%', marginTop: '2%'}}>
                        <p>Home</p>
                        <Icon name='home' size='big'/>
                    </div>
                </Link>
                <Segment style={{margin: '5% 20% 0% 20%'}}>
                    <Item style={{width: '100%'}}>
                        <Item.Image src={details.photo ? details.photo : '/images/guest.png'} size='small'
                                    floated='left'/>

                        <Item.Content>
                            <Table basic='very' collapsing>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Visitor Name:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.name}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Visitor ID:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.visitorId}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Email ID:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details ? details.email : 'No Details Available'}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Reference Employee:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.empMail}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Allowed From:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.dateTimeAllowedFrom}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Allowed Till:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.dateTimeAllowedTo}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Item.Description>
                                {/*dsfsdfsdfsfsdfs<br/><br/><br/>*/}
                                {/*dsfsdfsdfsfsdfs<br/>*/}
                                {/*dsfsdfsdfsfsdfs<br/>*/}
                                {/*dsfsdfsdfsfsdfs<br/>*/}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Segment>
                <Segment style={{margin: '10% 20% 0% 20%'}}>
                    <Image style={{marginLeft: '40%'}} src={this.state.qrCode} size='small'/>
                </Segment>
                <br/>
                <Button content='Print' positive onClick={() => {
                    alert("printing ...")
                }}/>
            </div>
        )
    }
}

export default GatePass;
