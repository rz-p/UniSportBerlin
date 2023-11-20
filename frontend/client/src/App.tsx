import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserList from "./components/userList";

 const App = () => {
 return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
   </div>
 );
};
 export default App; 