import { memo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Layout, Text, Title } from "../../components";
import { QuestionsContext } from "../../context";
import { Question } from "../../types";
import { ButtonsContainer, CardContainer, TextContainer, TitleContainer } from "./quiz.style";

function Quiz() {
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(QuestionsContext);
  const question = questions?.find(({ answer }) => answer === undefined);

  useEffect(() => {
    if (!questions?.length) {
      navigate("/");
    } else if (!question) {
      navigate("/results");
    }
  }, [questions, question]);

  const updateAnswers = (answer: boolean) => {
    const answeredQuestions = questions?.map((element: Question) => ({
      ...element,
      answer: element.index === question?.index ? answer : element.answer,
    }));

    if (answeredQuestions) {
      setQuestions?.(answeredQuestions);
    }
  };

  const handleTrueClick = () => updateAnswers(true);
  const handleFalseClick = () => updateAnswers(false);

  return (
    <Layout>
      <TitleContainer>
        <Title>{question?.category}</Title>
      </TitleContainer>
      <CardContainer>
        <Card>{question?.description}</Card>
      </CardContainer>
      <TextContainer>
        <Text>
          {question?.index || 0 + 1} of {questions?.length}
        </Text>
      </TextContainer>
      <ButtonsContainer>
        <div>
          <Button onClick={handleTrueClick}>True</Button>
        </div>
        <div>
          <Button onClick={handleFalseClick}>False</Button>
        </div>
      </ButtonsContainer>
    </Layout>
  );
}

export default memo(Quiz);
