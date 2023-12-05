import { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const QuestionOne = () => {
  return (
    <>
      <h4>
        1.Create a React application that has multiple pages represented as
        components. Implement lazy loading for these components using React's
        lazy and Suspense features. When a user navigates to a particular page,
        the component should be loaded lazily, improving the application's
        initial loading time.
      </h4>
      <ErrorBoundary fallback={<div>Have Some Errors</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default QuestionOne;
