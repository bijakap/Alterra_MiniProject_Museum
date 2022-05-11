import { useState } from "react";

const InputImageSingle = ({label, optional, id}) => {
  const [input, setInput] = useState("");
  return(
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 tracking-wide mb-2">{label} <span className={optional ? "text-[#C4351A]" : "hidden"}>*</span></label>
      <input type="file" className="hidden" id={id} onChange={(e) => setInput(e.target.files[0])} accept="image/png, image/jpeg, image/jpg"/>
      <div className="flex gap-4">
        <button onClick={() => document.getElementById(id).click()} className="border border-[#D0D5DD] bg-[#F2F4F7] py-[6px] px-4 rounded-lg"><span>Upload File</span></button>
        {
          input.length != 0 ? 
          <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">{input.name}</span>
          :
          <span className="self-center font-normal text-sm leading-5 tracking-[0.25px] text-[#667085]">No file chosen</span> 
        }
      </div>
    </div>
  )
}

export default InputImageSingle;