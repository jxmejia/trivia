import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Text, Title } from "../../components";
import { QuestionsContext } from "../../context";
import { getCorrectAnswersTotal, hasAnswers, isCorrectAnswer } from "../../utils";
import { TitleContainer, TextContainer, ButtonContainer } from "./results.style";

const Results = () => {
  const navigate = useNavigate();
  const { questions, getQuestions } = useContext(QuestionsContext);

  useEffect(() => {
    if (!questions?.length) {
      navigate("/");
    } else if (!hasAnswers(questions)) {
      navigate("/quiz");
    }
  }, [questions, navigate]);

  const handleClick = () => getQuestions?.();

  return (
    <Layout>
      <TitleContainer>
        <Title>
          You scored {getCorrectAnswersTotal(questions)} / {questions?.length}
        </Title>
      </TitleContainer>
      <TextContainer>
        {questions?.map((question) => (
          <div key={question.index}>
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
