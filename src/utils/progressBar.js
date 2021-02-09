const progressBar = step => {
  let value = 0;
  switch (step) {
    case "Intro":
      value = 25; // percent for fullfil of progress bar
      break;
    case "BasicInfo":
      value = 37.5;
      break;
    case "Expectations":
      value = 50;
      break;
    case "Education":
      value = 62.5;
      break;
    case "Experience":
      value = 75;
      break;
    case "TechnoStack":
      value = 87.5;
      break;
    case "ExtraInfo":
      value = 100;
      break;
    default:
      value = 0;
      break;
  }
  return `${value}%`;
};

export { progressBar };
