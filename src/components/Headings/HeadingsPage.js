import Heading from "./Heading";
import Section from "./Section";

export default function HeadingsPage({ children }) {
  return (
    <Section>
      <Heading>Heading</Heading>
      <Section>
        <Heading>Sub Heading</Heading>
        <Heading>Sub Heading</Heading>
        <Section>
          <Heading>Sub Sub Heading</Heading>
          <Heading>Sub Sub Heading</Heading>
          <Heading>Sub Sub Heading</Heading>
          <Section>
            <Heading>Sub Sub Sub Heading</Heading>
            <Heading>Sub Sub Sub Heading</Heading>
            <Heading>Sub Sub Sub Heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
