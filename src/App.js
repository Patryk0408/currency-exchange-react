import React from "react";
import Header from "./Header";
import Container from "./Container";
import Banner from "./Banner";
import Section from "./Section";
import Table from "./Table";
import Form from "./Form";

function App() {
  return (
    <Container>
      <Header title="Kantor wymiany walut"/>
      <Section>
        <Banner firstTitle="Witaj w kantorze wymiany walut!" secondTitle="Z nami wymienisz taniej!"/>
        <Table tableTitle="tylko u nas te waluty w takim kursie:"/>
        <Form/>
      </Section>
    </Container>
  );
}

export default App;
