import * as React from 'react';
import './style.css';

import Menu from './Menu';
import Footer from './Footer';
import FullPageNav from './FullPageNav';

export default function App() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    fetch('./countries.json', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setCountries(res['data']));
  });
  return (
    <div>
      <Menu />
      <FullPageNav cnt={countries} />
      <Footer />
    </div>
  );
}
