import React from 'react';

export default function Landing() {
  return (
    <section className="landing">
        <header>
            <div className="header__container">
                <div className="header__img--container">
                    <h1 className="title">Hello <img src="images/Chase.jpeg" alt="" className="header__img"/></h1>
                </div>
                <h1 className="title red">I'm Chase.</h1>
                <p className="header__para">
                    I'm a <b className="red">Full Stack Software Engineer</b> with a passion for building web applications and improving user experience
                </p>
            </div>
        </header>
    </section>
  )
}
