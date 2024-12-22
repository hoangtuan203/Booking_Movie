import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./route/route";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || Fragment; // Dùng Fragment nếu layout là null hoặc không được chỉ định

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.layout === null ? (
                    <Page /> // Nếu không có layout, render trực tiếp Page
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
