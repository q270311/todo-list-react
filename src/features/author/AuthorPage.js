import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

const AuthorPage = () => {
  return (
    <Container>
      <Header title="Autor" />
      <Section
        title="Michał Bałdyga"
        body={
          <>
            <p>Cześć, mam na imię Michał, pochodzę z małej miejscowości Zalas położonej
              w najdalej wysuniętej na północ części woj. mazowieckiego. Obecnie (od 2015) mieszkam i pracuję w Nowym Dworze Mazowieckim.</p>
            <p>Z wykształcenia jestem magistrem informatyki spec. <em>projektowanie i eksploatacja systemów informatycznych</em>.
              Posiadam też drugi fakultet - licencjat z <em>matematyki finansowej i aktuarialnej</em>.</p>
            <p>Pracuję jako nauczyciel przedmiotów zawodowych informatycznych w Zespole Szkół nr 2 w zawodzie <em>technik informatyk</em>.
              Wcześniej pracowałem w korporacji gdzie zajmowałem się przygotowywaniem raportów z danych wyciągniętych z <em>SQL Server'a</em>.</p>
            <p>W wolnych chwilach biorę udział w zawodach strzeleckich jako licencjonowany zawodnik PZSS,
               a w sezonie - gdy pogoda dopisuje - wsiadam na motocykl i przemierzam kilometry tras.</p>
          </>}
      />
    </Container>
  );
}

      export default AuthorPage;