import Image from 'next/image';
import soon1 from '../public/assets/images/auth/coming-soon-object1.png';

const Index = () => {
  return (
    <>
      <div>
        <h1>starter page</h1>
        <Image src={soon1} alt="Image" />
      </div>
    </>
  );
};

export default Index;
