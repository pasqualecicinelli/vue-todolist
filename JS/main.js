const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: "Andare dal meccanico",
                    done: true
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

        pressEnter(enter) {
            if (enter.key == "Enter") this.addNew();
        },

        //Bonus:2

        invertDoneValue() {
            
            if (this.done == false) {
                this.done = true;
            } else {
                this.done = false;
            }
        },

    },

    created() {

        //Bonus: 1

        window.addEventListener('keypress', this.pressEnter);

    },

}).mount('#app')