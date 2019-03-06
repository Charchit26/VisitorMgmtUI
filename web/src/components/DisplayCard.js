import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

class DisplayCard extends Component {
    render() {
        return (
            <Card
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
