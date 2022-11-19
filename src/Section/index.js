import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <div className="section__header">
            {title}
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;