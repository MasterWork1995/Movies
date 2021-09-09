import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomeView } from "./components/HomeView/HomeView";
import { MoviesPage } from "./components/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "./components/MovieDetailsPage/MovieDetailsPage";
import { NotFoundView } from "./components/NotFoundView/NotFoundView";
import { Section } from "./components/Section/Section";
import { Container } from "./components/Container/Container";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Section>
            <Container>
              <HomeView />
            </Container>
          </Section>
        </Route>

        <Route path="/movies" exact>
          <Section>
            <Container>
              <MoviesPage />
            </Container>
          </Section>
        </Route>

        <Route path="/movies/:movieId">
          <Section>
            <Container>
              <MovieDetailsPage />
            </Container>
          </Section>
        </Route>

        <Route>
          <Section>
            <Container>
              <NotFoundView />
            </Container>
          </Section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
