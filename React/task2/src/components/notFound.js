import React from "react";

class NotFound extends React.Component {
    constructor() {
        super();
        this.state = {
            imge: "./imges/404.jpg",
        };
    }

    render() {
        return ( <
            div className = "container" >
            <
            img className = "imge"
            alt = "not-found"
            src = { this.state.imge }
            /> <
            button className = "btn btn-primary"
            onClick = {
                () => this.props.history.replace("/") } >
            Back To Home <
            /button> <
            /div>
        );
    }
}

export default NotFound;