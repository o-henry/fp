const { Map } = require("immutable");

describe("pure function", () => {
    it("slice", () => {
        const xs = [1, 2, 3, 4, 5];
        expect(xs.slice(0, 3)).toStrictEqual([1, 2, 3]);
    });

    it("reasonable", () => {
        // Aliases: p = player, a = attacker, t = target
        const jobe = Map({ name: "Jobe", hp: 20, team: "red" });
        const michael = Map({ name: "Michael", hp: 20, team: "green" });

        const decrement_hp = (p) => p.set("hp", p.get("hp") - 1);
        const is_same_team = (p1, p2) => p1.get("team") === p2.get("team");
        const punch = (a, t) => (is_same_team(a, t) ? t : decrement_hp(t));

        punch(jobe, michael); // Map({name:'Michael', hp:19, team: 'green'})
    });
});
