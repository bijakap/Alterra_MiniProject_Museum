import Sidebar from "../../components/Sidebar";
import Logout from "../../components/Section/Logout";
import Footer from "../../components/Footer";
import DetailMuseum from "../../components/Section/DetailMuseum";

const Dashboard = () => {
  return (
    <>
    <div className="flex bg-[#F6F7FB]">
      <Sidebar active={0}/>
      <div className="w-full flex flex-col justify-between ">
        <div className="mx-10">
          <div className="flex justify-end">
            <Logout/>
          </div>
          <DetailMuseum/>
        </div>
        <Footer/>
      </div>
    </div>
    
    </>
  )
}

export default Dashboard;