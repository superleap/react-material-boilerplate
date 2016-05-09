import React, {Component, PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import GithubCircleIcon from 'material-ui-community-icons/icons/github-circle';

class Footer extends React.Component
{
    static contextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

    getStyles() {
        const styles = {
            footer: {
                backgroundColor: this.context.muiTheme.palette.canvasColor,
                padding: this.context.muiTheme.spacing.desktopGutter,
                textAlign: 'center',
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                boxSizing: 'border-box'
            },
            a: {
                color: this.context.muiTheme.palette.alternateTextColor
            },
            p: {
                margin: '0 auto',
                padding: this.context.muiTheme.spacing.desktopGutterMini,
                color: this.context.muiTheme.palette.textColor
            },
            iconButton: {
                color: this.context.muiTheme.palette.alternateTextColor
            }
        };

        return styles;
    }

    render( )
    {
        const styles = this.getStyles();

        return (
            <div style={styles.footer}>
                <p style={styles.p}>
                    {' Hand crafted by the engineers at '}
                    <a style={styles.a} href="http://superleap.xyz">
                        Super Leap
                    </a>
                    {' and our awesome '}
                    <a
                        style={styles.a}
                        href="https://github.com/superleap/react-material-boilerplate/graphs/contributors"
                    >
                        contributors
                    </a>.
                </p>
                <IconButton
                    tooltip="Visit github repo"
                    iconStyle={styles.iconButton}
                    href="https://github.com/superleap/react-material-boilerplate"
                    linkButton={true}
                >
                    <GithubCircleIcon/>
                </IconButton>
            </div>
        )
    }
}

export default muiThemeable()(Footer);
