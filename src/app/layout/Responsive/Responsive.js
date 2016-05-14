import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import darkTheme from '../../theme/dark';
import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card/';
import AppBar from 'material-ui/AppBar';
import ChromeHelmet from '../../component/ChromeHelmet';
import Footer from '../../component/Footer';
import './style.less';

const darkMuiTheme = getMuiTheme(darkTheme);

class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        width: PropTypes.number.isRequired
    };

    static contextTypes = {
    };

    static childContextTypes = {
        muiTheme: PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme
        };
    };

    componentWillMount() {
        this.setState({
            muiTheme: getMuiTheme()
        });
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
        this.setState({
            muiTheme: newMuiTheme
        });
    };

    getStyles() {
        console.log(darkMuiTheme);

        const styles = {
            wrapper: {
                minHeight: '100%'
            }
        };

        return styles;
    };

    render() {
        const {
            prepareStyles,
        } = this.state.muiTheme;
        const styles = this.getStyles();

        return (
            <MuiThemeProvider muiTheme={darkMuiTheme}>
                <div style={ styles.wrapper }>
                    <ChromeHelmet/>
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
                    <Footer/>
                </div>
            </MuiThemeProvider>
        )
    }
}

Layout.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
};

export default withWidth()(Layout);
