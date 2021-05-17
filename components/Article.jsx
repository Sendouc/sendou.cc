const Article = ({ children }) => {
  return (
    <article className="max-w-2xl px-4 mx-auto mt-4 mb-8 leading-relaxed">
      {children}
    </article>
  );
};

export default Article;
