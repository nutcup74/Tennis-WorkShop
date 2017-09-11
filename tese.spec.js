function NewGame() {

    var A = ["LOVE", "15", "30", "45"];
    var B = ["LOVE", "15", "30", "45"];

    this.reset = () => {
        return "0-0"
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
        return A[this.Pa] + "-" + B[this.Pb];
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


test("45-15", () => {
    let app = new NewGame
    app.reset()
    app.AgetSC()
    app.AgetSC()
    app.AgetSC()
    app.BgetSC()
    let res = app.eco()
    expect(res).toBe("45-15")


})