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

export default getDate;
