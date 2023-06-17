import Header from "./Header";
import Banner from "./Banner";
import Section from "./Section";
import Form from "./Form";

function App() {
  return (
    <main>
      <Header title="Kantor wymiany walut" />
      <Section>
        <Banner
          firstTitle="Witaj w kantorze wymiany walut!"
          secondTitle="Z nami wymienisz taniej!"
        />
        <Form headerTitle="Przelicz z nami!" />
      </Section>
    </main>
  );
}

export default App;
