import './contact.css';

const Contact = () => {

    return (
        <section className="contact">
            <form action="" method="get">
                <div className="form__row">
                    <label htmlFor="name">Prénom et NOM</label>
                    <div className="form__row__input">
                        <input type="text" name="name" id="name" placeholder="Nom Prenom, Prenom NOM ..." />
                    </div>
                </div>
                <div className="form__row">
                    <label htmlFor="email">Adresse Email</label>
                    <div className="form__row__input">
                        <input type="email" name="email" id="email" placeholder="little.monster@gmail.com" />
                    </div>
                </div>
                <div className="form__row">
                    <label htmlFor="message">Message</label>
                    <div className="form__row__input">
                        <textarea name="message" id="message" placeholder="Je souhaite entrer à la Monster Academie car..."></textarea>
                    </div>
                </div>
                <div className="form__row">
                    <button>Envoyer</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;