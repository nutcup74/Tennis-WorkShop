function NewGame() {

    var A = ["LOVE", "15", "30", "40"];
    var B = ["LOVE", "15", "30", "40"];

    this.reset = () => {
        return A[this.Pa=0] + "-" + B[this.Pb=0];
    }


    this.Pa = 0
    this.Pb = 0



    this.AgetSC = () => {
        return this.Pa++
    }


    this.BgetSC = () => {
        return this.Pb++
    }

    this.eco = () => {
       if(this.Pa == 3 && this.Pb == 3){
            return "deuce"
        }
        else{
            return A[this.Pa] + "-" + B[this.Pb];
            }
    }
}


test("LOVE-LOVE", () => {
    let app = new NewGame
    app.reset()

    let res = app.eco()
    expect(res).toBe("LOVE-LOVE")


})



test("15-15", () => {
    let app = new NewGame
    app.reset()
    app.AgetSC()
    app.BgetSC()
    let res = app.eco()
    expect(res).toBe("15-15")


})

test("30-30", () => {
    let app = new NewGame
    app.reset()
    app.AgetSC()
    app.AgetSC()
    app.BgetSC()
    app.BgetSC()
    let res = app.eco()
    expect(res).toBe("30-30")


})


test("40-15", () => {
    let app = new NewGame
    app.reset()
    app.AgetSC()
    app.AgetSC()
    app.AgetSC()
    app.BgetSC()
    let res = app.eco()
    expect(res).toBe("40-15")


})


test("40-40", () => {
    let app = new NewGame
    app.reset()
    app.AgetSC()
    app.AgetSC()
    app.AgetSC()
    app.BgetSC()
    app.BgetSC()
    app.BgetSC()
    let res = app.eco()
    expect(res).toBe("deuce")


})