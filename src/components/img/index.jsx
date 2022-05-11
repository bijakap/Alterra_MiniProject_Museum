import { useEffect, useState } from "react";
import { getBase64 } from "../../utils/getBase64";

const Testimg = () => {

  const [inputsFoto, setinputsFoto] = useState([
    {
      filename : '',
      imgBase64: ''
    },
  ]);


  const handleChange = (e,index) => {
    console.log(e.target.files[0])
    getBase64(e.target.files[0])
      .then((result) => {
        const newInput = [...inputsFoto]
        newInput[index].imgBase64 = result
        newInput[index].filename = e.target.files[0].name
        setinputsFoto(newInput)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const tambahInputFoto = () => {
    const newInputs = [...inputsFoto]
    newInputs.push({
      filename : '',
      imgBase64: ''
    })
    setinputsFoto(newInputs);
  }

  const deleteInputFoto = (index) => {
    const newInputs = inputsFoto.filter((data, dataIdx) => (dataIdx !== index))
    setinputsFoto(newInputs)  
  }

  useEffect(() => {
    console.log(inputsFoto);
  }, [inputsFoto])

  return (
  <div className="p-4">
    {
      inputsFoto.map((input, inputIdx) => {
        return(
          <div className="" key={inputIdx}>
            <input type="file" id={"uploadFile" + inputIdx} className="hidden" onChange={(e) => handleChange(e,inputIdx)}/>
            {
              input.filename.length > 0 ? 
              <span>{input.filename}</span> 
              : 
              <button onClick={() => document.getElementById("uploadFile" + inputIdx).click()}>Upload Image</button>
            }
            <button onClick={() => deleteInputFoto(inputIdx)} className={`m-3 p-2 bg-red-500 ${inputsFoto.length > 1 ? "" : "hidden"}`}>X</button>
          </div>
        )
      })
    }
      <button className="bg-green-800 p-2" onClick={() => tambahInputFoto()}>Tambah Input File</button>
  </div>
  )
}

export default Testimg;