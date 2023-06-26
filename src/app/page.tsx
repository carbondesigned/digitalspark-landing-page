import Image from 'next/image';

export default function Home() {
  const bgGlow =
    "before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#5b00ef] after:dark:opacity-40 before:lg:h-[360px]";
  return (
    <main className='flex min-h-screen flex-col p-24 max-w-5xl mx-auto'>
      <section className='flex flex-col-reverse lg:flex-row min-h-[45vh] w-full'>
        <div className='flex flex-[0.25] lg:flex-1 flex-col gap-4'>
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
              href='#'
              className='px-6 py-4 bg-white text-black rounded-full font-medium'
            >
              See our work
            </a>
            <a
              href='#'
              className='px-6 py-4 border-[0.5px] border-white text-white rounded-full font-medium hover:bg-white hover:text-black duration-200 ease-in-out'
            >
              Who are we
            </a>
          </div>
        </div>
        <div
          className={`hidden relative md:flex flex-[4] lg:flex-1 rounded-2xl overflow-hidden lg:overflow-visible ${bgGlow}`}
        >
          <Image
            src='/images/cool-bg02.png'
            alt='Picture of the author'
            fill
            className='object-cover lg:object-contain'
          />
        </div>
      </section>
      <section className='mt-24'>
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
                I’m a software engineer passionate about helping local
                businesses grow their digital presence!
              </p>
            </div>
            <a
              href='https://dylanreed.dev'
              target='_blank'
              className='px-6 py-4 max-w-fit bg-white text-black rounded-full font-medium'
            >
              See more
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-4 mt-24'>
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
              <h4 className='text-2xl font-medium'>
                👋 How&apos;s going, I’m Kemar!
              </h4>
              <p className='text-white/50'>
                I love helping small local businesses grow their digital from
                growing up in Windsor Ontario.
              </p>
            </div>
            <a
              href='#'
              className='px-6 py-4 max-w-fit bg-white text-black rounded-full font-medium'
            >
              See our work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
