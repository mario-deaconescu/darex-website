const playStoreLink = '';

const playStoreImageUrl = 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png';

const PlayStoreButton = () => <a href={playStoreLink}>
    <img className='inline' style={{height: '60px'}} src={playStoreImageUrl} alt='Get it on Play Store'/>
</a>

export default PlayStoreButton;
