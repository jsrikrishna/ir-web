import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import axios from 'axios';
var _ = require('lodash');

export default class GetData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queryResults: {}
        }
    }

    componentDidMount() {
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
        const query_results = _.toPairs(this.state.queryResults);
        const data = _.sortBy(query_results, [(result) => -result[1]]);
        const listItems = data.map((result) => {
            return (
                <div>
                    <ListItem primaryText={result[0]}
                              secondaryText={result[1]}/>
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