import React from "react";

class NotFound extends React.Component {
    constructor() {
        super();
    }

    render() {
        return ( <
            div className = "container" >
            <
            h1 > Page Not found < /h1>{" "} <
            button className = "btn btn-primary"
            onClick = {
                () => this.props.history.replace("/") } >
            Back To Home { " " } <
            /button>{" "} <
            /div>
        );
    }
}

export default NotFound;