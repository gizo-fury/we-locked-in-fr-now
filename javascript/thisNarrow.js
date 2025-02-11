



const restaurant = {
    name: "Tasty Treats",
    staff: ["Alice", "Bob"],
    
    greetCustomers: function() {
        // 'this' is bound to restaurant here
        console.log(`Welcome to ${this.name}!`);
        
        // Arrow function inherits 'this' from parent scope
        this.staff.forEach(person => {
            console.log(`${person} welcomes you to ${this.name}`);
        });

        // Regular function creates new 'this' binding
        this.staff.forEach(function(person) {
            console.log(`${person} welcomes you to ${this.name}`); // this.name will be undefined!
        });
    }
};
restaurant.greetCustomers()



