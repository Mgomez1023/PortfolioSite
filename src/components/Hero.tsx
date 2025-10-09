import "../styling/Hero.css"

export default function Hero() {
    return (
        <>
            <div className="cardHero">
                <div className="column" >
                
                    <h1 className="name">Hi, I'm Martin Gomez</h1>
                    <p className="title">React developer studying Computer Science 
                        at the University of Illinois
                    </p>
                </div>

                <div className="columns2">
                    <button className="button project is-link is-outlined is-rounded" onClick={() => {
                        window.location.href = "mailto:martingomez@example.com";
                    }}>
                        View Projects
                    </button>
                    <button className="button is-link is-outlined is-rounded" onClick={() => {
                        window.location.href = "mailto:martingomez@example.com";
                    }}>
                        Contact Me
                    </button>
                </div>

        </div>
        </>
    );
}

export { Hero }