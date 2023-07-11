import './accueil.css';

const Accueil = () => {

    return (
        <section className="home">
            <div className="home__image">
                <img src="/src/assets/germaine.jpg" alt="Germaine ROZ" />
            </div>
            <h3>Germaine ROZ</h3>
            <article>
                <p>Agent Top Secret</p>
                <div>
                    Germaine est un monstre fort peu sympathique, gardienne de l'usine et responsable des dossiers dans Monstres et Cie.
                    <br />C'est une secrétaire à cheval sur les détails et les principes.
                    <br />Elle parle très lentement et bouge à la vitesse d’un escargot.
                    <br />Cependant, elle a une vivacité d’esprit étonnante pour une limace.
                    <br />Elle reproche constamment à Bob de ne pas lui rendre ses rapports en temps et en heure.
                    <br />Germaine est un personnage pénible, froid et aigri.
                </div>
            </article>

        </section>
    )
}

export default Accueil;