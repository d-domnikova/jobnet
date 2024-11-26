import { Routes, Route } from 'react-router-dom';

import SignUp from "/src/pages/SignUp";
import NoPage from "/src/pages/NoPage";
import Landing from "/src/pages/Landing";
import Blog from "/src/pages/Blog";
import Post from "src/pages/Post.jsx";
import VacancyPage from "/src/pages/VacancyPage";
import AllVacancies from "./pages/AllVacancies";
import AllServices from "./pages/AllServices";
import ServicePage from "./pages/ServicePage";
import AllResumes from "./pages/AllResumes";
import ResumePage from "./pages/ResumePage";
import UserProfile from "src/pages/UserProfile";
import PersonalInfo from "src/pages/PersonalInfo";
import PersonPage from "src/pages/PersonPage.jsx"
import CompanyPage from "src/pages/CompanyPage.jsx";
import CompanyVacancies from "src/pages/CompanyVacancies.jsx";
import SavedVacancies from "src/pages/SavedVacancies.jsx";
import UserServices from "src/pages/UserServices.jsx";
import PersonalBlog from "src/pages/PersonalBlog.jsx";
import CompanyProfile from "src/pages/CompanyProfile.jsx";
import CreatedVacancies from "src/pages/CreatedVacancies.jsx";
import VacancyForm from './pages/forms/VacancyForm';
import ServiceForm from './pages/forms/ServiceForm';
import ResumeForm from './pages/forms/ResumeForm';

export default function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/signup/:role' element={<SignUp/>} />
      <Route path="/vacancies" element={<AllVacancies />} />
      <Route path="/services" element={<AllServices />} />
      <Route path="/resumes" element={<AllResumes />} />
      <Route path="/resumes/:id" element={<ResumePage />} />
      <Route path="/vacancies/:id" element={<VacancyPage />} />
      <Route path="/services/:id" element={<ServicePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/userprofile" element={<UserProfile />}/>
      <Route path="/personalinfo" element={<PersonalInfo/>}/>
      <Route path="/personpage/:id" element={<PersonPage/>}/>
      <Route path="/companypage/:id" element={<CompanyPage/>}/>
      <Route path="/companyprofile/:id" element={<CompanyProfile/>}/>
      <Route path="/companyvacancies/:id" element={<CompanyVacancies/>}/>
      <Route path="/savedvacancies/:id" element={<SavedVacancies/>}/>
      <Route path="/userservices/:id" element={<UserServices/>}/>
      <Route path="/personalblog/:id" element={<PersonalBlog/>}/>
      <Route path="/createdvacancies/:id" element={<CreatedVacancies/>}/>
      <Route path="*" element={<NoPage />} />

      <Route path="/create/vacancy" element={<VacancyForm />} />
      <Route path="/create/service" element={<ServiceForm />} />
      <Route path="/create/resume" element={<ResumeForm />} />
    </Routes>
  </>
  )
}
  