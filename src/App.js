import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import   
 CreateFormPage from './pages/CreateFormPage';
import EditFormPage from './pages/EditFormPage';
import ViewFormPage from './pages/ViewFormPage';
import FormResponses from './components/FormResponses';

const App = () => {
  return (
    <HomePage />
    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<HomePage />} />
    //     <Route path="/form/create" element={<CreateFormPage />} />
    //     <Route path="/form/:id/edit" element={<EditFormPage />} />
    //     <Route path="/form/:id" exact element={<ViewFormPage />} />
    //     <Route path="/form/:id/response" element={<FormResponses />} />
    //   </Routes>
    // </Router>
  );
};

export default App;