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
            countList:0,
        };
    }
}).mount('#app')