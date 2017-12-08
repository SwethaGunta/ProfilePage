import variable from "./../variables/platform";

export default (variables = variable) => {
  const tabTheme = {
    flex: 1,
    backgroundColor: variables.tabDefaultBg
  };

  return tabTheme;
};

