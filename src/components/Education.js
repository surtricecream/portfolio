import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();

    return (
        <section className="Education">
            <h3>{t('education.degree')}</h3>
            <p>{t('education.graduation')}</p>
        </section>
    )
}

export default Education