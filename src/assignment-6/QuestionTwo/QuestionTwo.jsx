import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const QuestionTwo = () => {
  return (
    <>
      <h4>
        2.Extend Question 1 to include error handling. If a lazy-loaded
        component fails to load, display a user-friendly error message to the
        user instead of crashing the application. Implement this using the
        ErrorBoundary component.
      </h4>
      <ErrorBoundary fallback={<div>Have Some Errors</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <Home />
          <About />
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default QuestionTwo;
