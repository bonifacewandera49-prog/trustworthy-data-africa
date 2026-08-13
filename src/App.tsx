import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import AdminLayout from "@/components/AdminLayout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Mission from "@/pages/Mission";
import Team from "@/pages/Team";
import Sectors from "@/pages/Sectors";
import Work from "@/pages/Work";
import ActivityDetail from "@/pages/ActivityDetail";
import Consultancy from "@/pages/Consultancy";
import ConsultancyDetail from "@/pages/ConsultancyDetail";
import { CanaryDrop, Qkabrine } from "@/pages/Solutions";
import Research from "@/pages/Research";
import DatasetsPage from "@/pages/Datasets";
import Reports from "@/pages/Reports";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Events from "@/pages/Events";
import EventDetail from "@/pages/EventDetail";
import EventRegister from "@/pages/EventRegister";
import EventAccess from "@/pages/EventAccess";
import Opportunities from "@/pages/Opportunities";
import Apply from "@/pages/Apply";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import Policies from "@/pages/Policies";
import NotFound from "@/pages/NotFound";
import AdminLogin from "@/pages/AdminLogin";
import AdminBlog from "@/pages/admin/AdminBlog";
import AdminEvents from "@/pages/admin/AdminEvents";
import AdminEventDetail from "@/pages/admin/AdminEventDetail";
import AdminPapers from "@/pages/admin/AdminPapers";
import AdminReports from "@/pages/admin/AdminReports";
import AdminDatasets from "@/pages/admin/AdminDatasets";
import AdminTeam from "@/pages/admin/AdminTeam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/mission" element={<Layout><Mission /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/sectors" element={<Layout><Sectors /></Layout>} />
        <Route path="/work" element={<Layout><Work /></Layout>} />
        <Route path="/work/:slug" element={<Layout><ActivityDetail /></Layout>} />
        <Route path="/consultancy" element={<Layout><Consultancy /></Layout>} />
        <Route path="/consultancy/:slug" element={<Layout><ConsultancyDetail /></Layout>} />
        <Route path="/solutions/canarydrop" element={<Layout><CanaryDrop /></Layout>} />
        <Route path="/solutions/qkabrine" element={<Layout><Qkabrine /></Layout>} />
        <Route path="/research" element={<Layout><Research /></Layout>} />
        <Route path="/datasets" element={<Layout><DatasetsPage /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/events/:slug" element={<Layout><EventDetail /></Layout>} />
        <Route path="/events/:slug/register" element={<Layout><EventRegister /></Layout>} />
        <Route path="/events/:slug/access" element={<Layout><EventAccess /></Layout>} />
        <Route path="/events/:slug/access/:token" element={<Layout><EventAccess /></Layout>} />
        <Route path="/opportunities" element={<Layout><Opportunities /></Layout>} />
        <Route path="/apply" element={<Layout><Apply /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/donate" element={<Layout><Donate /></Layout>} />
        <Route path="/policies" element={<Layout><Policies /></Layout>} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout><AdminBlog /></AdminLayout>} />
        <Route path="/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
        <Route path="/admin/events/:id" element={<AdminLayout><AdminEventDetail /></AdminLayout>} />
        <Route path="/admin/papers" element={<AdminLayout><AdminPapers /></AdminLayout>} />
        <Route path="/admin/reports" element={<AdminLayout><AdminReports /></AdminLayout>} />
        <Route path="/admin/datasets" element={<AdminLayout><AdminDatasets /></AdminLayout>} />
        <Route path="/admin/team" element={<AdminLayout><AdminTeam /></AdminLayout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
