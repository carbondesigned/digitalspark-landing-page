export default function Contact() {
  const bgGlow =
    "before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#5b00ef] after:dark:opacity-40 before:lg:h-[360px]";
  return (
    <main className='flex min-h-screen flex-col p-24 max-w-xl mx-auto'>
      <div className={`pb-12 pt-6 ${bgGlow}`}>
        <h1 className='text-6xl font-bold'>Let us help!</h1>
        <p className='text-white/50 text-sm'>
          We are here to help you with any questions you may have. Reach out to
          us and we will respond as soon as we can.
        </p>
      </div>
      <form action='https://formspree.io/f/meqbjabw' method='POST'>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>What is your name?</span>
          </label>
          <input
            name='name'
            type='text'
            required
            placeholder='John Doe'
            className='input input-bordered w-full s bg-black border-[0.5px] border-white/25'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>How can I reach you?</span>
          </label>
          <input
            name='email'
            type='email'
            placeholder='johndoe@gmail.com'
            className='input input-bordered w-full bg-black border-[0.5px] border-white/25'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Your business name.</span>
          </label>
          <input
            name='business-name'
            type='text'
            required
            placeholder='Acme Corp.'
            className='input input-bordered w-full bg-black border-[0.5px] border-white/25'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Do you already have a website?</span>
          </label>
          <input
            name='business-website'
            type='text'
            placeholder='acmecorp.com'
            className='input input-bordered w-full bg-black border-[0.5px] border-white/25'
          />
        </div>

        <button className='bg-white text-black rounded-2xl px-12 py-4 w-full mt-12'>
          Send
        </button>
      </form>
    </main>
  );
}
