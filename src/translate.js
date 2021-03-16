import {useTranslation} from 'react-i18next';

function Translate() {
    const {t, i18n} = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="Translate">
            <div className="row" className="App-header p-3">
                <div className="col-md-6">
                    <h3>Proven-sa : Multilingual Platform</h3>
                </div>
                <div className="container">
                    <header id="translateBtn">
                        <button type="button" className="btn btn-secondary mr-2"
                                onClick={() => handleClick('en')}>English
                        </button>
                        <button type="button" className="btn btn-secondary mr-2"
                                onClick={() => handleClick('ko')}>Korien
                        </button>
                        <button type="button" className="btn btn-secondary mr-2"
                                onClick={() => handleClick('ja')}>Japanese
                        </button>
                    </header>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <h3><strong>{t('aboutTitle.1')} :</strong></h3>
                    <p>{t('content.1')}</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3><strong>{t('descripTitle.1')} : </strong></h3>
                        <p>{t('descripInfo.1')}</p>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/images/proven.png"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Translate;
