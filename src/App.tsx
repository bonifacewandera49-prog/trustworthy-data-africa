import { lazy, Suspense } from "react";
import { BrowserRouter, StaticRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import LiveContent from "@/components/LiveContent";
const AdminLayout = lazy(() => import("@/components/AdminLayout"));
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
import Partnerships from "@/pages/Partnerships";
import Policies from "@/pages/Policies";
import NotFound from "@/pages/NotFound";
const AdminLogin = lazy(() => import("@/pages/AdminLogin"));
const AdminBlog = lazy(() => import("@/pages/admin/AdminBlog"));
const AdminEvents = lazy(() => import("@/pages/admin/AdminEvents"));
const AdminEventDetail = lazy(() => import("@/pages/admin/AdminEventDetail"));
const AdminPapers = lazy(() => import("@/pages/admin/AdminPapers"));
const AdminReports = lazy(() => import("@/pages/admin/AdminReports"));
const AdminDatasets = lazy(() => import("@/pages/admin/AdminDatasets"));
const AdminCourses = lazy(() => import("@/pages/admin/AdminCourses"));
const AdminOpportunities = lazy(() => import("@/pages/admin/AdminOpportunities"));
const AdminTeam = lazy(() => import("@/pages/admin/AdminTeam"));

import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import OpportunityDetail from "@/pages/OpportunityDetail";
import ResourceDetail from "@/pages/ResourceDetail";
function App({ location }: { location?: string }) {
 const Router = location ? StaticRouter : BrowserRouter;
  return (
    <Router location={location || "/"}><LiveContent><Suspense fallback={<p role="status">Loading…</p>}>
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
        <Route path="/opportunities/:slug" element={<Layout><OpportunityDetail /></Layout>} />
        <Route path="/resources/:slug" element={<Layout><ResourceDetail /></Layout>} />
        <Route path="/short-courses" element={<Layout><Courses /></Layout>} />
        <Route path="/short-courses/:slug" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/apply" element={<Layout><Apply /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/partnerships" element={<Layout><Partnerships /></Layout>} />
        <Route path="/policies" element={<Layout><Policies /></Layout>} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout><AdminBlog /></AdminLayout>} />
        <Route path="/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
        <Route path="/admin/events/:id" element={<AdminLayout><AdminEventDetail /></AdminLayout>} />
        <Route path="/admin/papers" element={<AdminLayout><AdminPapers /></AdminLayout>} />
        <Route path="/admin/reports" element={<AdminLayout><AdminReports /></AdminLayout>} />
        <Route path="/admin/datasets" element={<AdminLayout><AdminDatasets /></AdminLayout>} />
        <Route path="/admin/courses" element={<AdminLayout><AdminCourses /></AdminLayout>} />
        <Route path="/admin/opportunities" element={<AdminLayout><AdminOpportunities /></AdminLayout>} />
        <Route path="/admin/team" element={<AdminLayout><AdminTeam /></AdminLayout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Suspense></LiveContent></Router>
  );
}

export default App;
