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
            newText: " ",

        };
    },

    methods: {
        elementDelete(index) {
            
            this.toDoList.splice(index, 1);
        },
        addNew() {
            
            this.toDoList.unshift({
                text: this.newText,
               
            })
            this.newText = "";
            
        },
    }

}).mount('#app')