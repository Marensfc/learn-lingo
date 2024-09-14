import AppBar from '../app-bar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
