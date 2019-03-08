import React, {Component} from 'react';
import {Button, Header, Icon, Item, Segment, Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class EmployeeGatePass extends Component {
    render() {
        const details = this.props.location.props.details;
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
                <br/>
                <Button content='Print' positive onClick={() => {
                    alert("printing ...")
                }}/>
            </div>
        )
    }
}

export default EmployeeGatePass;
