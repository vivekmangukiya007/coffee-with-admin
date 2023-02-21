import { Routes, Route } from "react-router-dom";
import Index from './coffeeBlogPages/Index';
import { SingleBlogData } from "./coffeeBlogPages/SingleBlogData";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}/> 
        <Route path="/SingleBlogData/:id" element={<SingleBlogData/>}/> 
      </Routes>
    </>
  );
}

export default App;
