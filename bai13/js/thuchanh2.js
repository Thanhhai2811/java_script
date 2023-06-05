const calculator = {
    read : function (ab1, ab2) {
        this.ab1 = ab1;
        this.ab2 = ab2;
    },
    sum : function() {
        return this.ab1 + this.ab2;
    },
    avg : function() {
        return (this.ab1 + this.ab2) / 2;
    },

}

    calculator.read(1, 3);
    console.log(calculator.sum());


