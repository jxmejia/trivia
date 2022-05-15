import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Text, Title } from "../../components";
import { QuestionsContext } from "../../context";
import { ButtonContainer, TextContainer, TitleContainer } from "./home.style";

const Home = () => {
  const navigate = useNavigate();
  const { questions, getQuestions } = useContext(QuestionsContext);

  useEffect(() => {
    if (questions?.length) {
      navigate("/quiz");
    }
  }, [questions, navigate]);

  const handleClick = () => {
    getQuestions?.();
  };

  return (
    <Layout>
      <TitleContainer>
        <Title>Welcome to the Trivia Challenge!</Title>
      </TitleContainer>
      <TextContainer>
        <div>
          <Text>You will be presented with 10 True or False questions.</Text>
        </div>
        <div>
          <Text>Can you score 100%?</Text>
        </div>
      </TextContainer>
      <ButtonContainer>
        <Button onClick={handleClick}>Begin</Button>
      </ButtonContainer>
    </Layout>
  );
};

export default memo(Home);
