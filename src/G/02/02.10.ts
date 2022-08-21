import _ from "lodash";
import R from "ramda";

class TipCalculator {
    public add_person(names: string[], name: string): string[] {
        const updated: string[] = names.slice();
        R.append(name, updated);
        return updated;
    }

    public static get_tip_percentage(names: string[]): number {
        if (R.length(names) > 5) {
            return 20;
        } else if (R.length(names) > 0) {
            return 10;
        }
        return 0;
    }

    /* need to modify */
    public get_names(names: string[]): string[] {
        return R.clone(names);
    }
}

export { TipCalculator };
