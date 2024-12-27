import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Challenge: add another label and input for the password field
 */

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label hrmlFor="password">Password:<label/>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit<button/>
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
