import React from 'react';
import { connect } from 'react-redux';

const containerStyle = {
    display: 'flex'
}

const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}

class Counter extends React.Component {

    addOne = () => {
        this.props.dispatch({type: 'ADD_ONE'});
    }
    
    minusOne = () => {
        this.props.dispatch({type: 'MINUS_ONE'});
    }

    render() {
        return(
            <main className='App'>
                <header className='App-header'>
        <h1>{this.props.number}</h1>
                    <div style={containerStyle}>
                        <button onClick={this.minusOne} type='button' style={buttonStyle}>-</button>
                        <button onClick={this.addOne} type='button' style={buttonStyle}>+</button>
                    </div>
                </header>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number
    };
}



export default connect(mapStateToProps)(Counter);