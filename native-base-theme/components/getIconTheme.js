import variable from "./../variables/platform";

export default (variables = variable) => {
  const platform = variables.platform;

  const getvectoriconTheme = {
    flexDirection: "row",
    backgroundColor: variables.tabDefaultBg,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ".scrollable": {
      paddingHorizontal: 20,
      flex: platform === "android" ? 0 : 1,
      minWidth: platform === "android" ? undefined : 60
    },
    "NativeBase.Text": {
      color: variables.topTabBarTextColor,
      marginHorizontal: 7
    },
    "NativeBase.Icon": {
      color: variables.topTabBarTextColor,
      fontSize: platform === "ios" ? 26 : undefined
    },
    ".active": {
      "NativeBase.Text": {
        color: variables.topTabBarActiveTextColor,
        fontWeight: "600"
      },
      "NativeBase.Icon": {
        color: variables.topTabBarActiveTextColor
      },
	
      "ReactNativeVectorIcons.MaterialCommunityIcons": {
        color: variables.topTabBarActiveTextColor
      },

      "ReactNativeVectorIcons.Feather": {
        color: variables.topTabBarActiveTextColor
      },

      "ReactNativeVectorIcons.SimpleLineIcons": {
        color: variables.topTabBarActiveTextColor
      },

      "ReactNativeVectorIcons.EvilIcons": {
        color: variables.topTabBarActiveTextColor
      }

    }
  };

  return getvectoriconTheme;
};

