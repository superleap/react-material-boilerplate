import React from 'react';
import Helmet from 'react-helmet';

class ChromeHelmet extends React.Component {
    render() {
        return (
            <Helmet
                titleTemplate="Super Leap - %s"
                defaultTitle="React Material Boilerplate"
                meta={[
                    {"name": "description", "content": "Are you ready to take a Digital Super Leap ?" },
                    {"name": "keywords", "content": "react, material-ui, boilerplate, super leap"},
                    {"name": "robots", "content": "NOODP"},
                    {"name": "viewport", "content": "width=device-width, initial-scale=1"},
                    {"property": "og:type", "content": "article"}
                ]}
            />
        )
    }
}

export default ChromeHelmet;
