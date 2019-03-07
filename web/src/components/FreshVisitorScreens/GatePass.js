import React, {Component} from 'react';
import {Image, Item, Segment} from 'semantic-ui-react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

class GatePass extends Component {
    render() {
        return (
            <div>
                <Segment style={{margin: '5% 20% 0% 20%'}}>
                    <Item style={{width: '100%'}}>
                        <Item.Image src='/images/guest.png' size='small' floated='left'/>

                        <Item.Content>
                            <Item.Header>Name: Charchit Gupta</Item.Header>
                            <Item.Meta>
                                <span>$1200</span>
                                <span>1 Month</span>
                            </Item.Meta>
                            <Item.Description>
                                dsfsdfsdfsfsdfs<br/><br/><br/>
                                dsfsdfsdfsfsdfs<br/>
                                dsfsdfsdfsfsdfs<br/>
                                dsfsdfsdfsfsdfs<br/>
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
