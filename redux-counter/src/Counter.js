import React from 'react';

const containerStyle = {
    display: 'flex'
}

const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}

class Counter extends React.Component {
    render() {
        return(
            <main className='App'>
                <header className='App-header'>
                    <h1>0</h1>
                    <div style={containerStyle}>
                        <button type='button' style={buttonStyle}>-</button>
                        <button type='button' style={buttonStyle}>+</button>
                    </div>
                </header>
            </main>
        );
    }
}

export default Counter;