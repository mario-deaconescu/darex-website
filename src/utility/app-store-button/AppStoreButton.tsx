import appStoreImage from './app-store.svg';

const appStoreLink = '';

const AppStoreButton = () => <a href={appStoreLink}>
    <img className='inline' src={appStoreImage} alt='Get it on App Store'/>
</a>

export default AppStoreButton;
