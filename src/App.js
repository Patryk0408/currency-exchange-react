import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Section from "./Section";
import Table from "./Table";
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
        <Table
          tableTitle="Tylko u nas te waluty w takim kursie:"
          euroValue="4,69"
          dollarValue="4,41"
          funtValue="5,39"
        />
        <Form headerTitle="Przelicz z nami!" />
      </Section>
    </main>
  );
}

export default App;
