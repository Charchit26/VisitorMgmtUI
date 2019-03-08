import React, {Component} from 'react';
import {Button, Header, Image, Item, Segment, Table} from 'semantic-ui-react';

class GatePass extends Component {
    render() {
        //const details = this.props.location.props.details;
        const details = {
            "employeeId": 721791,
            "employeeName": "Gurpreet",
            "email": "gurpreet@infy.com",
            "photo": null
        };
        return (
            <div>
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
                                                    Employee Name:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.employeeName}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header>
                                                <Header.Content>
                                                    Employee ID:
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{details.employeeId}</Table.Cell>
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
                    <Image style={{marginLeft: '40%'}} src='/images/guest.png' size='small'/>
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
