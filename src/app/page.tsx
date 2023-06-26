import Image from 'next/image';

export default function Home() {
  const bgGlow =
    "before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#5b00ef] after:dark:opacity-40 before:lg:h-[360px]";
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
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
              className='px-6 py-4 border-[0.5px] border-white text-white rounded-full font-medium'
            >
              Who are we
            </a>
          </div>
        </div>
        <div
          className={`hidden relative md:flex flex-[4] lg:flex-1 rounded-2xl overflow-hidden lg:overflow-visible ${bgGlow}`}
        >
          <Image
            src='/cool-bg02.png'
            alt='Picture of the author'
            fill
            className='object-cover lg:object-contain'
          />
        </div>
      </section>
    </main>
  );
}
