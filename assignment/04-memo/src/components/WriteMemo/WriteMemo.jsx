import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const DateSpan = styled.span`
  text-align: center;
  color: var(--text-grey);
  margin: 0 auto 24px;
`;

const StyledTextarea = styled.textarea`
  height: 90%;
  border: none;
  resize: none;
  outline: none;
  font-size: 1.5rem;
  line-height: 1.66;
`;

export default function WriteMemo() {
  return (
    <StyledArticle>
      <DateSpan>{getDate()}</DateSpan>
      <StyledTextarea></StyledTextarea>
    </StyledArticle>
  );
}

function getDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const timeCycle = hours >= 12 ? "오후" : "오전";
  const divideHour = hours % 12 || 12;
  const formattedMinute = String(minutes).padStart(2, "0");

  let dateTime = `${year}년 ${month}월 ${date}일 ${timeCycle} ${divideHour}:${formattedMinute}`;

  return dateTime;
}
