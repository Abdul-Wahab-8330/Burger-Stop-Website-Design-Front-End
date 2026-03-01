import { useParams, Navigate } from "react-router-dom";
import { newsData } from "@/config/constants";
import SingleNewsLayout from "@/pages/SingleNewsLayout";
import { Helmet } from "react-helmet-async";


export default function SingleNewsPage() {
  const { slug } = useParams();

  const article = newsData.find((item) => item.slug === slug);

  // ❌ Invalid slug → redirect to news listing
  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{article.title} | Burger Stop</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <SingleNewsLayout article={article} />
    </>
  );

}