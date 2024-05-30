import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1500,
        'Programmer',
        1500,
        'Software developer',
        1500
      ]}
      wrapper="span"
      speed={50}
      className='text-[2rem] md:text-[2rem] text-green-500 lg:text-[2rem] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;