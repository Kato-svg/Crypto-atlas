import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Back to home</Link>
    </main>
  );
}

export default NotFoundPage;
