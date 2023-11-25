import LeftPanel from "./LeftPanel"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TabContent from "./TabContent";

export default function RoutingWithLeftPanel () {

    return (
            <div >
              <BrowserRouter>
              <LeftPanel />
                <Routes>
                  <Route path="/Assessment" exact element={<TabContent />} />
                  {/* <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} /> */}
                </Routes>
              </BrowserRouter>
            </div>
         
    )
}