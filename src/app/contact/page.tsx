export default function Contact() {
  return (
    <main className='flex min-h-screen flex-col p-24 max-w-xl mx-auto'>
      <form action='https://formspree.io/f/meqbjabw' method='POST'>
        <div className='form-control w-full '>
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
