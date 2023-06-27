import PricingListItem from '@/components/PricingListItem';
import Image from 'next/image';

function SkillTag({children}: {children: React.ReactNode}) {
  return (
    <p className='bg-secondary w-fit whitespace-nowrap px-6 py-2 text-xs border-[0.5px] border-white/10 rounded-full z-0 hover:brightness-150 duration-200 cursor-default'>
      {children}
    </p>
  );
}

export default function Home() {
  const bgGlow =
    "before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#5b00ef] after:dark:opacity-40 before:lg:h-[360px]";

  const tagsRow1 = [
    'Mobile App Development',
    'JavaScript',
    'React',
    'Angular',
    'Vue',
    'Node.js',
    'Python',
    'Email Marketing',
    'Copywriting',
    'Data Analysis',
    'Animation',
    '3D Modeling',
  ];

  const tagsRow2 = [
    'UI/UX',
    'Web Design',
    'Web Development',
    'SEO',
    'Digital Marketing',
    'Branding',
    'Social Media Marketing',
    'Content Creation',
    'Graphic Design',
    'Information Architecture',
    'Project Management',
    'Customer Support',
    'Quality Assurance',
    'Video Editing',
    'Illustration',
    'Photography',
  ];
  return (
    <main className='flex min-h-screen flex-col p-12 pt-24 md:p-24 max-w-5xl mx-auto'>
      <section
        className='flex flex-col-reverse lg:flex-row min-h-[45vh] w-full'
        id='hero'
      >
        <div className='flex flex-[0.25] lg:flex-1 flex-col gap-4 relative'>
          <div className={`relative flex place-items-center ${bgGlow}`}>
            <h1 className='text-6xl font-bold'>
              No more ‘Meh’ Websites. Let us help.
            </h1>
          </div>
          <h4 className='text-white/50 text-xl'>
            Let&apos;s turn your &apos;meh&apos; into &apos;wow&apos; and boost
            your online game together.
          </h4>
          <div className='flex gap-2 items-center'>
            <a
              href='#pricing'
              className='px-6 py-4 bg-white text-black rounded-full font-medium text-sm md:text-base'
            >
              Let&apos;s start
            </a>
            <a
              href='#aboutus'
              className='px-6 py-4 border-[0.5px] border-white text-white rounded-full font-medium hover:bg-white hover:text-black duration-200 ease-in-out text-sm md:text-base'
            >
              Who are we
            </a>
          </div>
        </div>
        <div
          className={`hidden relative md:flex flex-[4] lg:flex-1 rounded-2xl overflow-hidden lg:overflow-visible hover:brightness-125 hover:saturate-150 duration-200 ${bgGlow}`}
        >
          <Image
            src='/images/cool-bg02.png'
            alt='Picture of the author'
            fill
            className='object-cover lg:object-contain'
          />
        </div>
      </section>
      <div className='hidden lg:flex flex-col gap-2 my-4 relative'>
        {[tagsRow1, tagsRow2].map((tags, rowIndex) => (
          <div className='flex w-full overflow-hidden z-0' key={rowIndex}>
            <div className='flex animate-scroll space-x-2'>
              {tags.map((tag, index) => (
                <SkillTag key={index}>{tag}</SkillTag>
              ))}
              {tags.map((tag, index) => (
                <SkillTag key={`duplicate-${index}`}>{tag}</SkillTag>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section className='my-12' id='aboutus'>
        <h2 className='font-bold text-white/50 text-3xl py-4'>Who are we.</h2>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='relative w-full md:flex-[0.75] h-48 rounded-2xl overflow-hidden'>
            <Image
              src='/images/dylan.jpg'
              alt='Dylan Reed'
              fill
              className='object-cover h-full w-full'
            />
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h4 className='text-2xl font-medium'>👋 Hey, I’m Dylan!</h4>
              <p className='text-white/50'>
                I’m a software engineer, originally wanted to work in big tech,
                but now I love helping small local businesses grow their digital
                from growing up in Windsor Ontario.
              </p>
            </div>
            <a
              href='https://dylanreed.dev'
              target='_blank'
              className='px-6 py-4 max-w-fit bg-white text-black rounded-full font-medium'
            >
              Learn more about me
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-4 mt-24'>
          <div className='relative w-full md:flex-[0.75] h-48 rounded-2xl overflow-hidden'>
            <Image
              src='/images/kemar.png'
              alt='Dylan Reed'
              fill
              className='object-cover h-full w-full object-top'
            />
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h4 className='text-2xl font-medium'>👋 I’m Kemar!</h4>
              <p className='text-white/50'>
                I&apos;m currently a student at St. Clair College studying Web
                Development & Internet Applications, figuring to use my skills
                to help local businesses grow their digital presence!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-20' id='ourwork'>
        <h2 className='font-bold text-white/50 text-3xl py-4'>
          Some of our work
        </h2>
        <div className='carousel carousel-center w-full p-4 space-x-4 rounded-box'>
          <div className='carousel-item relative md:w-96 md:h-96'>
            <Image
              src='/images/nathan-zarowny-mock.png'
              className='rounded-box'
              alt='Nathan Zarowny Website Mockup'
              fill
            />
          </div>
          <div className='carousel-item relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/city-cyclery-mock.png'
              className='rounded-box'
              alt='City Cyclery Website Mockup'
              fill
            />
          </div>
          <div className='carousel-item relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/gymlink-mock.png'
              className='rounded-box'
              alt='Gymlink App Mockup'
              fill
            />
          </div>
          <div className='carousel-item relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/my-portfolio-mock.png'
              className='rounded-box'
              alt='My Portfolio Website Mockup'
              fill
            />
          </div>
          <div className='carousel-item relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/solana-dapp.png'
              className='rounded-box object-cover'
              alt='Solana Dapp Mockup'
              fill
            />
          </div>
          <div className='carousel-item relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/run-mock.png'
              className='rounded-box'
              alt='Runing Shoe Website Mockup'
              fill
            />
          </div>
          <div className='carousel-item relative w-64 h-64 md:w-96 md:h-96'>
            <Image
              src='/images/cricket-mock.png'
              className='rounded-box'
              alt='Cricket Website Mockup'
              fill
            />
          </div>
        </div>
      </section>

      <section id='pricing'>
        <h2 className='font-bold text-white/50 text-3xl py-4'>
          Ready to start?
        </h2>

        <div className='w-full flex flex-col gap-1 text-black'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 flex-1'>
            <div className='bg-white p-6 flex flex-col justify-between rounded-t-3xl md:rounded-tr-none'>
              <div className='py-8'>
                <h3 className='font-bold text-2xl'>Design</h3>
                <p className='text-black/75'>
                  I’ll design websites, mobile apps, wireframes, design systems.
                </p>
              </div>
              <h4 className='text-4xl font-bold py-8'>$529</h4>

              <div className='pt-8'>
                <div>
                  <h5 className='font-bold'>What&apos;s included:</h5>
                  <ul className='px-4'>
                    <PricingListItem>Websites</PricingListItem>
                    <PricingListItem>Mobile apps</PricingListItem>
                    <PricingListItem>Wireframes</PricingListItem>
                    <PricingListItem>Design systems</PricingListItem>
                    <PricingListItem>Social media graphics</PricingListItem>
                  </ul>
                </div>
                <div className='flex flex-col items-center gap-2 mt-12'>
                  <a
                    href='https://buy.stripe.com/8wM00c1n50KZ5KUfYY'
                    target='_blank'
                    className='btn btn-secondary bg-black text-white w-full'
                  >
                    Get started
                  </a>
                  <a href='#'>Book a call</a>
                </div>
              </div>
            </div>
            <div className='bg-white p-6 flex flex-col justify-between relative'>
              <div className='absolute bg-white rounded-full h-32 w-32 grid place-items-center -top-12 md:-top-20 -right-6 shadow-real border-2 border-black border-dashed rotate-12'>
                <h3 className='font-bold text-2xl text-center leading-5'>
                  Most Popular
                </h3>
              </div>
              <div className='py-8'>
                <h3 className='font-bold text-2xl'>
                  Custom Web Development + Design
                </h3>
                <p className='text-black/75'>
                  I’ll code a fully custom, highly performant, and SEO website
                  for your business.
                </p>
              </div>
              <h4 className='text-4xl font-bold py-8'>$3,549</h4>

              <div className='pt-8'>
                <div>
                  <h5 className='font-bold'>What&apos;s included:</h5>
                  <ul className='px-4'>
                    <PricingListItem>Landing pages</PricingListItem>
                    <PricingListItem>Resutrant/menu info</PricingListItem>
                  </ul>
                </div>
                <div className='flex flex-col items-center gap-2 mt-12'>
                  <a
                    href='https://buy.stripe.com/aEUeV65Dl8drehqcMN'
                    className='btn btn-secondary bg-black text-white w-full'
                  >
                    Get started
                  </a>
                  <a href='#'>Book a call</a>
                </div>
              </div>
            </div>
            <div className='bg-white p-6 flex flex-col justify-between md:rounded-tr-3xl'>
              <div className='py-8'>
                <h3 className='font-bold text-2xl'>Adcanced Web Development</h3>
                <p className='text-black/75'>
                  I’ll code and provide a fully customizable backend and
                  dashboard to help your business.
                </p>
              </div>
              <h4 className='text-4xl font-bold py-8'>$7,500</h4>

              <div className='pt-8'>
                <div>
                  <h5 className='font-bold'>What&apos;s included:</h5>
                  <ul className='px-4'>
                    <PricingListItem>Fullstack web app</PricingListItem>
                    <PricingListItem>Custom business dasboard</PricingListItem>
                  </ul>
                </div>
                <div className='flex flex-col items-center gap-2 mt-12'>
                  <a
                    href='https://buy.stripe.com/3cs8wI5Dl51f5KU7su'
                    className='btn btn-secondary bg-black text-white w-full'
                  >
                    Get started
                  </a>
                  <a href='#'>Book a call</a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-[0.5] p-6 bg-white flex flex-col md:flex-row items-center rounded-b-3xl'>
            <div className='h-64 w-64 md:flex-1 relative'>
              <Image
                src='/images/pricing-book-call-ill.svg'
                alt='Pricing book call illustration'
                fill
                className='object-contain h-full w-full'
              />
            </div>
            <div className='md:flex-1 px-8'>
              <h3 className='font-bold text-2xl'>Book a call</h3>
              <p className='text-black/75'>
                Learn more about how we can help you and your business.
              </p>
              <a
                href='#'
                className='btn btn-secondary bg-black text-white w-full'
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
