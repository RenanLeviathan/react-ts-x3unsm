import * as React from 'react';
import './style.css';

import Menu from './Menu';
import Footer from './Footer';
import FullPageNav from './FullPageNav';

export default function App() {
  return (
    <div>
      <Menu />
      <FullPageNav />
      <Footer />
    </div>
  );
}
