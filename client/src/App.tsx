import React from 'react';
import './App.css'
import Card from "./components/card";


function App() {
  return (
    <div className='app'>
        <div className='body-container'>
            <Card title='Paste your url here'>
                <div className="card-body">
                    <input type='text' />
                    <button className='button-primary' onClick={() => alert('Clicked!')}>Shorten</button>
                </div>
            </Card>
        </div>
    </div>
  );
}

export default App;
