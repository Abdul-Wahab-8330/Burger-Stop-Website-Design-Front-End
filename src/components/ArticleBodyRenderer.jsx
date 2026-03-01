function ArticleBodyRenderer({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h3
                key={index}
                className="font-spatial-black text-secondary uppercase text-xl md:text-2xl"
              >
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="font-medium text-secondary text-sm md:text-base leading-relaxed"
              >
                {block.text}
              </p>
            );

          case "image":
            return (
              <div key={index} className="w-full overflow-hidden rounded-lg">
                <img
                  src={block.url}
                  alt={block.alt || ""}
                  className="w-full h-auto object-cover"
                />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default ArticleBodyRenderer;