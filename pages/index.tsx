import Image from 'next/image';
import soon1 from '../public/assets/images/auth/coming-soon-object1.png';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1>starter page</h1>
        {t('sign_in')}
        <Image src={soon1} alt="Image" />
      </div>
    </>
  );
};

export default Index;
