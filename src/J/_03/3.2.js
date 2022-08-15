var _ = require("lodash");
import R from "ramda";

/**
 * 국가별 인구 계산
 */
_(persons).reduce((start, person) => {
    const country = person.address.country;
    stat[country] = _.isUndefined(stat[country]) ? 1 : start[country] + 1;
    return stat;
}, {});

/*
    {
        "US": 2,
        "Greece": 1,
        "Hungary": 1
    }
*/

/**
 * more functional
 */

const get_country = (person) => person.address.country;
const gather_stats = function (stat, criteria) {
    stat[criteria] = _.isUndefined(stat[criteria]) ? 1 : stat[criteria] + 1;
    return stat;
};

_(persons).map(get_country).reduce(gather_stats, {});

/**
 * lens
 */
const city_path = ["address", "city"];
const city_lens = R.lens(R.path(city_path), R.assocPath(city_path));

const is_not_valid = (val) => _.isUndefined(val) || _.isNull(val);
const not_all_valid = (args) => _(args).some(is_not_valid);

not_all_valid(["string", 0, null, undefined]);
not_all_valid(["string", 0, {}]);
