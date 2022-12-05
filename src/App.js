import './App.css';
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePg from './pages/HomePg';
import CreateAccountPg from './pages/CreateAccountPg';
import SettingsPg from './pages/SettingsPg';
import AnalyticsPg from './pages/AnalyticsPg';
import TrackPg from './pages/TrackPg';
import OnboardPg from './pages/OnboardPg';
import Report from './components/Report';


export default function App() {
  return (
<BrowserRouter>
    <Routes>
    {/* <Route element={<PageLayout> <Outlet /> </PageLayout>}> */}
      
      <Route path="/" element={<HomePg/>}/>
      <Route path="/create-account" element={<CreateAccountPg/>}/>
      <Route path="/onboard" element={<OnboardPg/>}/>
      <Route path="/track" element={<TrackPg/>}/>
      <Route path="/analytics" element={<AnalyticsPg/>}/>
      <Route path="/settings" element={<SettingsPg/>}/>
      <Route path="/e" element={<Report/>}/>
    </Routes>
    </BrowserRouter>
  );
}

