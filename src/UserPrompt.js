import React, {Component} from 'react';

class UserPrompt extends Component { 
    render() {
        return (
            <li>
                <p><span>Submitted by:</span> {this.props.name}</p>
                <p>{this.props.prompt}</p>
                <button onClick={this.props.handleClick} value={this.props.prompt}>Use This Prompt</button>
            </li>
        )
    }
    
}

export default UserPrompt;