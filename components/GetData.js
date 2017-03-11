import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import axios from 'axios';

export default class GetData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queryResults: {}
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8083?q=' + this.props.queryTerm)
            .then(response => {
                this.setState({queryResults: response.data});
                this.forceUpdate();
            })
            .catch(response => {
                console.log('Error Occurred ' + response)
            })
    }

    render() {
        const listItems = Object.keys(this.state.queryResults).map((url) => {
            return (
                <div>
                    <ListItem primaryText={url}
                              secondaryText={this.state.queryResults[url]}/>
                </div>
            )
        });

        return (
            <List>{listItems}</List>
        );
    }
}

GetData.propTypes = {
    queryTerm: React.PropTypes.string
};