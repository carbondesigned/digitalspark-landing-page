export default function Contact() {
  return (
    <main className='flex min-h-screen flex-col p-12 pt-24 md:p-24 max-w-xl mx-auto'>
      <div className={`pb-12 pt-6 `}>
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
            required
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
            placeholder='acmecorp.com or no.'
            className='input input-bordered w-full bg-black border-[0.5px] border-white/25'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>
              What is your inquiry about? (optional)
            </span>
          </label>
          <textarea
            name='inquiry'
            placeholder='Let us know how we can help you.'
            className='textarea textarea-bordered w-full bg-black border-[0.5px] border-white/25 h-32'
          ></textarea>
        </div>

        <button className='bg-white text-black rounded-2xl px-12 py-4 w-full mt-12'>
          Send
        </button>
      </form>
    </main>
  );
}
