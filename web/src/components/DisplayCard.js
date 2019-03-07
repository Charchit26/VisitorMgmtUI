import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

class DisplayCard extends Component {
    render() {
        return (
            <Card
                style={{height: '80%', width: '20%'}}
                image={this.props.image}
                onClick={this.props.onClick}
                header={this.props.header}
                meta={this.props.meta}
                description={this.props.desc}
                title={this.props.title}
            />
        )
    }
}

export default DisplayCard;
