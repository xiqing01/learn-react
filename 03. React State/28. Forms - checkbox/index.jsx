import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = forData.getAll("dietaryRestrictions")
    console.log(employmentStatus)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions"  value="Vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="Gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
