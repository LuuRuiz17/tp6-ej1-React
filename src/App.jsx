import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Saludo from "./components/Saludo";
import 'animate.css';

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Saludo></Saludo>
    </Container>
  )
}

export default App
