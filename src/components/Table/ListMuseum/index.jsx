import EditIcon from '@mui/icons-material/Edit';

const ListMuseum = ({sampleData}) => {
  return (
    <table className='table-auto w-full'>
      <thead className='border-collapse text-center bg-[#0A6C62] text-white'>
        <tr>
          <td className='px-3 py-2'>No</td>
          <td className='py-2 text-left'>Foto</td>
          <td className='px-3'>Nama Tempat</td>
          <td className='px-3'>Alamat</td>
          <td className='px-3'>Deskripsi</td>
          <td className='px-3 w-[200px]'>Jumlah Ulasan</td>
          <td className='px-3'>Aksi</td>
        </tr>
      </thead>
      <tbody className=''>
        {sampleData.map((data, index) => (
          <tr key={index} className={`text-left font-normal text-[14px] leading-[24px] tracking-[0.25px] text-[#232D42] ${index % 2 !== 0 ? "bg-[#F4FAFF]" : "bg-white"}`}>
            <td className='text-center'>{index+1}</td>
            <td className='p-2 w-[200px]'><img src={data.img} className="w-full h-full object-contain rounded-xl"/></td>
            <td className='p-2'>{data.nama}</td>
            <td className='p-2'>{data.alamat}</td>
            <td className='p-2 w-[300px]'><p className='line-clamp-3'>{data.deskripsi}</p></td>
            <td className='text-center p-2'>{data.jumlah}</td>
            <td className='px-2'>
              <button className='flex px-6 py-2 rounded-lg border bg-white hover:bg-[#116E1C] text-[#116E1C] hover:text-white text-[14px] leading-[20px] tracking-[0.25px]'>
                  <EditIcon className='text-[20px]'/> <span className='self-center font-medium ml-2'>Edit</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListMuseum;