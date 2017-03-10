import React from 'react'
import TextField from 'material-ui/TextField';
import {blue500} from 'material-ui/styles/colors';
import GetData from './GetData';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    underlineStyle: {
        borderColor: blue500,
    }
};


export default class Query extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hintText: 'Enter Your Search Query',
            query: '',
            isData: false
        };
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            query: event.target.value,
            isData: event.target.value != ''
        });
    };

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="ICS SEARCH ENGINE"
                    />
                    <CardText>
                        <TextField id="query-field"
                                   hintText={this.state.hintText}
                                   value={this.state.query}
                                   onChange={this.handleChange}
                                   fullWidth={true}
                                   underlineStyle={styles.underlineStyle}
                                   underlineFocusStyle={styles.underlineStyle}/>
                        <div>
                            {this.state.isData && <GetData queryTerm={this.state.query}/>}
                        </div>
                    </CardText>
                </Card>


            </div>
        )
    }
}

