import "./style.css";

const Section = ({title, extraHeaderContent, body}) => (
    <section className="section">
        <div class="section__header">
            {title}
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;