import { HeaderBar } from 'components/HeaderBar/HeaderBar';

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <HeaderBar />
      <main>{children}</main>
    </>
  );
};
