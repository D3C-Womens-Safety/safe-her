import { useLocation } from 'react-router-dom';
import { Header } from './Components/header.js';
import { Footer } from './Components/footer.js';

export const Layout = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/rant';

  return (
    <div className="App flex flex-1">
      <Header />
      {children}
      {showFooter && <Footer />}
    </div>
  );
};
