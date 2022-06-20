import Banner from "../../assets/imgs/todo-pick.jpg";
import { Link } from "react-router-dom";
import { Container, Content } from "./style";
import Button from "../../components/Button";

const Home = () => {
  return (
    <Container>
      <img className="desktop-img" src={Banner} alt="to-do-list" />
      <Content>
        <div className="text-content">
          <h1>To do!</h1>
          <p>Organize o seu dia a dia facilmente!</p>
          <img className="mobile-img" src={Banner} alt="to-do-list" />
        </div>
        <Button width="90%;">
          <Link to="/dashboard">Entrar</Link>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
