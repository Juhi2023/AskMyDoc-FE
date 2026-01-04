import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './pages/layout'
import NotFound from './pages/NotFound'
import About from './pages/About'
import VerifyOTPPage from './pages/VerifyOTP'
import TermsOfServicePage from './pages/Terms'
import ContactPage from './pages/Contact'
import PrivacyPolicyPage from './pages/Privacy'
import ResetPasswordPage from './pages/ResetPassword'
import RegisterPage from './pages/Resgister'
import LoginPage from './pages/Login'
import ForgotPasswordPage from './pages/ForgotPassword'
import DashboardPage from './pages/dashboard/Dashboard'
import DashboardLayout from './pages/dashboard/layout'
import { AuthProvider } from './contexts/AuthContext'
import DocumentsPage from './pages/dashboard/documents/Documents'
import CollectionsPage from './pages/dashboard/collections/Collections'
import ChatPage from './pages/dashboard/chat/Chat'
import SettingsPage from './pages/dashboard/settings/page'
import { SettingsProvider } from './contexts/settings-context'
import AnalyticsPage from './pages/dashboard/analytics/page'
import ChatHistoryPage from './pages/dashboard/chat-history/page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<RootLayout><Home/></RootLayout>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/terms' element={<TermsOfServicePage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/privacy' element={<PrivacyPolicyPage/>}></Route>
          <Route path='/login' element={<RootLayout><LoginPage/></RootLayout>}></Route>
          <Route path='/register' element={<RootLayout><RegisterPage/></RootLayout>}></Route>
          <Route path='/dashboard' element={
            <AuthProvider>
              <DashboardLayout>
              </DashboardLayout>
            </AuthProvider>
            }>
              <Route index element={<DashboardPage />} />
              <Route path='documents' element={<DocumentsPage/>}></Route>
              <Route path='collections' element={<CollectionsPage/>}></Route>
              <Route path='chat' element={<ChatPage/>}></Route>
              <Route path='analytics' element={<AnalyticsPage/>}></Route>
              <Route path='chat-history' element={<ChatHistoryPage/>}></Route>
              <Route path='settings' element={<SettingsProvider><SettingsPage/></SettingsProvider>}></Route>
            </Route>
          <Route path='/forgot-password' element={<ForgotPasswordPage/>}></Route>
          <Route path='/reset-password' element={<ResetPasswordPage/>}></Route>
          <Route path='/verify-otp' element={<VerifyOTPPage/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
