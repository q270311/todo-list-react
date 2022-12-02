import { Segment, Title } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <Segment>
        <Title>
            {title}
            {extraHeaderContent}
        </Title>
        {body}
    </Segment>
);

export default Section;