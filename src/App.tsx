import { HomePage } from "./pages/home"
import { ResetStyles } from "./components-styles/global-styles/reset"
import { Styles } from "./components-styles/global-styles/styles"
import { MobileStyles } from "./components-styles/global-styles/responsive"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SelectPLanPage } from "./pages/select-plan"
import { AddOnsPage } from "./pages/add-ons"
import { SummaryPage } from "./pages/summary"
import { ConfirmMessagePage } from "./pages/confirm-message"
import { Provider } from "react-redux"
import { store } from "./store/store"


function App() {

  return (
    <Provider store={store}>
      <ResetStyles />
      <Styles />
      <MobileStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/SELECT PLAN/:id" element={<SelectPLanPage />}/>
          <Route path="/ADD-ONS/:id" element={<AddOnsPage />}/>
          <Route path="/SUMMARY/:id" element={<SummaryPage />}/>
          <Route path="/CONFIRM/:id" element={<ConfirmMessagePage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
