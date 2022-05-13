import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Text, Title } from "../../components";
import { QuestionsContext } from "../../context";
import { getCorrectAnswersTotal, isCorrectAnswer } from "../../utils";
import { TitleContainer, TextContainer, ButtonContainer } from "./results.style";

export const Results = () => {
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(QuestionsContext);

  useEffect(() => {
    if (!questions?.length) {
      navigate("/");
    }
  }, [questions]);

  const handleClick = () => setQuestions?.([]);

  // Better icons ?
  return (
    <Layout>
      <TitleContainer>
        <Title>
          You scored {getCorrectAnswersTotal(questions)} / {questions?.length}
        </Title>
      </TitleContainer>
      <TextContainer>
        {questions?.map((question) => (
          <div>
            <Text>{isCorrectAnswer(question) ? "+" : "-"}</Text>
            <Text>{question.description}</Text>
          </div>
        ))}
      </TextContainer>
      <ButtonContainer>
        <Button onClick={handleClick}>Play again</Button>
      </ButtonContainer>
    </Layout>
  );
};

export default memo(Results);
