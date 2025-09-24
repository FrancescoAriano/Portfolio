export const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`pb-32 max-w-5xl mx-auto px-4 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};
