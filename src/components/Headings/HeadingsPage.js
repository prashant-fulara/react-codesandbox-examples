import Heading from "./Heading";
import Section from "./Section";

export default function HeadingsPage({ children }) {
  return (
    <Section level={1}>
      <Heading>Heading</Heading>
      <Section level={2}>
        <Heading>Sub Heading</Heading>
        <Heading>Sub Heading</Heading>
        <Section level={3}>
          <Heading>Sub Sub Heading</Heading>
          <Heading>Sub Sub Heading</Heading>
          <Heading>Sub Sub Heading</Heading>
          <Section level={4}>
            <Heading>Sub Sub Sub Heading</Heading>
            <Heading>Sub Sub Sub Heading</Heading>
            <Heading>Sub Sub Sub Heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
