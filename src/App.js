import ChanelBar from "./components/ChanelBar";
import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChanelBar />
      <ContentContainer />
      {/* 
      TODO: ChanelBar
      https://github1s.com/fireship-io/tailwind-dashboard/blob/HEAD/src/components/TopNavigation/index.jsx

      https://youtu.be/pfaSUYaSgRo
       */}
    </div>
  );
}

export default App;
