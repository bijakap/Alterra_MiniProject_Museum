import SearchIcon from '@mui/icons-material/Search';

const SearchBarV1 = () => {
  return(
    <div className='relative'>
      <input className="w-full xl:w-[475px] text-base px-4 py-[6px] border border-gray-300 rounded-lg focus:outline-none" type="search" placeholder="Search...."/>
      <div className='absolute top-1 right-2'>
        <SearchIcon className='text-[18px] text-gray-500 mt-[4px] cursor-pointer'/>
      </div>
    </div>
  )
}

export default SearchBarV1;