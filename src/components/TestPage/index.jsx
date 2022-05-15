import { useParams } from "react-router-dom";


const TestPage = () => {
  const {id} = useParams()

  return (
    <div>
      IDnya adalah {id}
    </div>
  )
}

export default TestPage;