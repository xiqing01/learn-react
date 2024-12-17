import Contact from "./Contact"

/**
 * Challenge (I'm sorry!): Add all the rest of the
 * data to the contact card instances. 😈
 */

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Photo of Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App


/**
 * 




<article className="contact-card">
    <img 
        src=""
        alt="Photo of Pumpkin"
    />
    <h3></h3>
    <div className="info-group">
        <img 
            src="./images/phone-icon.png" 
            alt="phone icon" 
        />
        <p></p>
    </div>
    <div className="info-group">
        <img 
            src="./images/mail-icon.png" 
            alt="mail icon"
        />
        <p></p>
    </div>
</article>
 */
