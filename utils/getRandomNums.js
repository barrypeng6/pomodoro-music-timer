export default length => {
  const selectedNum = [];
  while (selectedNum.length < 7) {
    const randomNum = Math.floor(Math.random() * (length - 1));
    if (!selectedNum.includes(randomNum)) selectedNum.push(randomNum);
  }
  return selectedNum;
};