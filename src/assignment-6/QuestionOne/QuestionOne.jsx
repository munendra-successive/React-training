import { Suspense, lazy } from "react";
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
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
        <Contact />
      </Suspense>
    </>
  );
};
export default QuestionOne;
