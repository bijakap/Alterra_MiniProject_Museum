
const CustomInput = ({label, value, setValue, optional, placeholder, name}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 tracking-wide">{label} <span className={optional ? "text-[#C4351A]" : "hidden"}>*</span></label>
      <input className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A6C62] mt-2 mb-6" placeholder={placeholder} type="text" name={name} onChange={(e) => {setValue({...value, [e.target.name] : e.target.value})}} />
    </div>
  )
}

export default CustomInput;