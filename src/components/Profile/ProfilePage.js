import Post from "./Post";
import Section from "./Section";
import Heading from "./Heading";

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );

  function RecentPosts() {
    return (
      <Section>
        <Heading>Recent Posts</Heading>
        <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
        <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
      </Section>
    );
  }
}
