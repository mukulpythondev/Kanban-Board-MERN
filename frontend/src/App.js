import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";
function App() {
  console.log('render app..')
  return (
    <AppLayout>
      <Toaster
        position="top-right"
        gutter={8}
      />
      <Routes>
        <Route path="/:projectId" element={<Task />} />
        <Route path="/" element={
          <div className="flex flex-col items-center w-full pt-5 sm:pt-10"> {/* Adjusted top padding */}
          <img src="./image/welcome.svg" className="w-8/12 sm:w-5/12" alt="" /> {/* Adjusted image width */}
          <h1 className="text-base sm:text-lg text-gray-600 mt-3">Select or create a new project</h1> {/* Adjusted font size and margin */}
      </div>
      
        } />
      </Routes>
    </AppLayout>
  );
}

export default App;
