import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkTheme from '../../theme/dark';
import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card/';
import './style.less';
import AppBar from 'material-ui/AppBar';

const darkMuiTheme = getMuiTheme(darkTheme);

class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={darkMuiTheme}>
                <div>
                    <AppBar title="My AppBar"/>
                    <Card>
                        <CardHeader
                            title="Without Avatar"
                            subtitle="Subtitle"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Layout;
