export default defineAppConfig({
  pages: ["pages/index/index", "pages/user/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  // tabBar: {
  //   selectedColor: "#ff8000",
  //   color: "#515151",
  //   borderStyle: "white",
  //   backgroundColor: "#fff",
  //   list: [
  //     {
  //       pagePath: "pages/index/index",
  //       text: "首页",
  //       iconPath: "./assets/tabBar/home.svg",
  //       selectedIconPath: "./assets/tabBar/home_selected.svg",
  //     },
  //     {
  //       pagePath: "pages/user/index",
  //       text: "我的",
  //       iconPath: "./assets/tabBar/my.svg",
  //       selectedIconPath: "./assets/tabBar/my_selected.svg",
  //     },
  //   ],
  // },
});
