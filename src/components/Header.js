import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <h1>FRANCISCO SIMÕES</h1>
      <div className="intro-list">
        <p>{t('header.role')}</p>
        <p>{t('header.location')}</p>
        <p>franciscojrs210@gmail.com</p>
      </div>
    </header>
  );
}

export default Header;
