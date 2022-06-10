import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section} title={title}>
      <h2 className="">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
