import Sidebar from "../../../components/Sidebar";
import Logout from "../../../components/Section/Logout";
import Footer from "../../../components/Footer";
import EditMuseum from "../../../components/Section/EditMuseum";

const Edit = () => {
  return (
    <>
    <div className="flex bg-[#F6F7FB]">
      <Sidebar active={2}/>
      <div className="w-full min-h-screen flex flex-col justify-between ">
        <div className="mx-10">
          <div className="flex justify-end">
            <Logout/>
          </div>
          <EditMuseum/>
        </div>
        <Footer/>
      </div>
    </div>
    
    </>
  )
}

export default Edit;