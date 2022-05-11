import CustomInput from "../../Input";
import Testimg from "../../img";
import InputImageSingle from "../../InputImage/single";
import { useState } from "react";
import { getBase64 } from "../../../utils/getBase64";

const TambahMuseum = () => {
  const [value, setValue] = useState({
    namaTempat : "",
    alamat : "",
    jadwal : "",
    kontak : "",
    deskripsi : "",
    thumbnail : "",
  })

  console.log(value);

  return(
    <div className="bg-white shadow-lg p-8 mb-8">
      <h4 className="font-semibold text-[30px] leading-10 tracking-[0.25px] text-[#252A31] mb-6">Tambah Museum</h4>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
        <CustomInput label={"Nama Tempat"} optional={true} value={value} name={"namaTempat"} placeholder={"Nama Tempat"} setValue={setValue}/>
        <CustomInput label={"Alamat Museum"} optional={true} value={value} name={"alamat"} placeholder={"Alamat Museum"} setValue={setValue}/>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
        <CustomInput label={"jadwal (Optional)"} optional={false} value={value} name={"jadwal"} placeholder={"Jadwal Museum"} setValue={setValue}/>
        <CustomInput label={"Kontak (Optional)"} optional={false} value={value} name={"kontak"} placeholder={"Kontak Museum"} setValue={setValue}/>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 tracking-wide">Deskripsi <span className={"text-[#C4351A]"}>*</span></label>
        <textarea className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A6C62] mt-2 mb-4 resize-none" rows={4} placeholder='Deskripsi Museum' value={value.deskripsi} name="deskripsi" onChange={(e) => {setValue({...value, [e.target.name] : e.target.value})}}>{value.deskripsi}</textarea>
      </div>
      <div className="flex flex-col pb-6 border-b">
        <InputImageSingle label={"Thumbnail"} optional={true} id={"Thumbnail"}/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default TambahMuseum;