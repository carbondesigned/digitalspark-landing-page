export default function DropdownMenu() {
  return (
    <div className='md:hidden dropdown dropdown-left '>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h7'
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black border-[0.5px] border-white/25'
      >
        <li>
          <a href='#aboutus'>About us</a>
        </li>
        <li>
          <a href='#ourwork'>Our work</a>
        </li>
        <li>
          <a href='#pricing'>Pricing</a>
        </li>
        <li className='bg-white text-black rounded-lg mt-4 py-2'>
          <a className='font-medium' href='/contact'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
