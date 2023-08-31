const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: "Andare dal meccanico",
                    done: false
                },
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Giocare a calcio",
                    done: true
                },
            ],

            countList: 0,
            newText: "",
        };
    },

    methods: {
        elementDelete(index) {
            console.log(index);
            console.log(this.toDoList[index]);
            this.toDoList.splice(index, 1);
        },
        addNew() {
            console.log(this.newText);
            
        }
    }

}).mount('#app')


/*
let toDoList = {
    text: " ",
    done: false
};

let newTodoList = { ...toDoList };*/
