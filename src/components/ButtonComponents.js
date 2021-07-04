import React from 'react'

class ButtonComponents extends React.Component {
    render () {
        return (
            <div className="button">
                <button name="Previous" onClick={e => this.props.onClick(e.target.name)}>Previous</button>
                <button name="Next" onClick={e => this.props.onClick(e.target.name)}>Next</button>
            </div>
        );
    }
}

export default ButtonComponents;