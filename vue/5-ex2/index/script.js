
const { createApp } = Vue;

createApp({
  data() {
    return {
      menus: [
        { name: "TOP", url: "index.html" },
        { name: "PROGRAM", url: "program.html" },
        { name: "DATE", url: "date.html" }
      ],

      programs: [
        "カノン",
        "四季",
        "月光"
      ],

      obj: {
        date: "11月3日",
        time: "15:00-16:00",
        place: "コンサートホール"
      }
    };
  }
}).mount("#app");
