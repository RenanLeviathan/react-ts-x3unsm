import * as React from 'react';
import Card from './Card';

function FullPageNav(props) {
  const americas = props.cnt.forEach((e) => {
    <Card name={e.name} href={e.href} flag={e.flag} />;
  });
  console.log(americas);
  return (
    <div className="container">
      <input type="radio" name="menu" id="rd_home" defaultChecked />
      <input type="radio" name="menu" id="rd_africa" />
      <input type="radio" name="menu" id="rd_americas" />
      <input type="radio" name="menu" id="rd_asia" />
      <input type="radio" name="menu" id="rd_europe" />
      <input type="radio" name="menu" id="rd_oceania" />
      <div className="sections">
        <section id="Home">
          <h1>Country Eagles</h1>
          <span>The bravest eagles of the world</span>
        </section>
        <section id="Africa">{americas}</section>
        <section id="Americas">
          <Card
            name="Brazil"
            href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/64435531537446980598328081086952127421203150666131551956018940076240326885377/"
            flag="https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png"
          />
          <Card
            name="Argentina"
            href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/64435531537446980598328081086952127421203150666131551956018940078439350140929/"
            flag="https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1536x963.jpg"
          />
          <Card
            name="Bolivia"
            href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/64435531537446980598328081086952127421203150666131551956018940079538861768705/"
            flag="https://cdn.countryflags.com/thumbs/bolivia/flag-400.png"
          />
        </section>
        <section id="Asia">Lorem ipsum lalala</section>
        <section id="Europe">Lorem ipsum lalala</section>
        <section id="Oceania">Lorem ipsum lalala</section>
      </div>
    </div>
  );
}

export default FullPageNav;
