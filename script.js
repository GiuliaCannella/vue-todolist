// controllo vue
const { createApp } = Vue;
const tasks = [
  "fare la spesa",
  "fare una passeggiata",
  "andare in palestra",
  "giocare a scacchi",
];
// vue
const app = createApp({
  data() {
    return {
      newTask: "",
      filter: "",
      tasks: [
        { id: 1, done: false, text: "fare la spesa" },
        { id: 2, done: false, text: "andare in palestra" },
        { id: 3, done: false, text: "cucinare" },
        { id: 4, done: false, text: "fare una passeggiata" },
      ],
    };
  },
  methods: {
    deleteTask(targetIndex) {
      this.tasks.splice(targetIndex, 1);
    },
    addTask() {
      if (this.newTask.lenght === 0) return;
      const newTaskObj = { id: this.calculateId(), done: false, text: this.newTask };
      this.tasks.push(newTaskObj);
      this.newTask = "";
    },
    toggleTaskStatus(targetId) {
      this.tasks.forEach((task) => {
        if (task.id === targetId) task.done = !task.done;
      });
    },
    calculateId() {
      let maxIdFound = 0;
      this.tasks.forEach(task => {
        if (task.id > maxIdFound) {
          maxIdFound = task.id;
        }
      })
      return ++maxIdFound;
    }
  },
  computed: {
    filterTask() {
      const textSearch = this.filter.toLowerCase();
      return this.tasks.filter((task) => {
        return task.text.toLowerCase().includes(textSearch);
      });
    },
  },
});

// stampa vue
app.mount("#app");
