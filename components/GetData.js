import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default class GetData extends React.Component {

    getData(queryTerm) {
        const urls = [1, 2, 3, 4, 5, 6, 7,1, 2, 3, 4, 5, 6, 7];
        const listItems = urls.map((url) => {
            return (
                <div>
                    <ListItem primaryText={queryTerm + url}
                              secondaryText="Hello this the secondary text"/>
                </div>
            )
        });
        return (
            <List>{listItems}</List>
        )
    }

    render() {
        return this.getData(this.props.queryTerm);
    }
}

GetData.propTypes = {
    queryTerm: React.PropTypes.string
};