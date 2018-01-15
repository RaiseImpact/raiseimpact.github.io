export default () => {
  const copyright = document.getElementById('copyright');
  const year = new Date().getFullYear();
  copyright.innerText = `${copyright.innerText}, ${year}`;
};
