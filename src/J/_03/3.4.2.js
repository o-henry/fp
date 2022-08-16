/**
 * mixin
 */

// SELECT p.firstname FROM Person p
// WHERE p.birthday > 1903 and p.country IS NOT 'US'
// GROUP BY p.firstname

_.mixin({
    select: _.map,
    from: _.chain,
    where: _.filter,
    sortBy: _.sortByOrder,
});

_.from(persons)
    .where((p) => p.birthday > 1903 && p.address.country !== "US")
    .sortBy(["firstname"])
    .select((p) => p.firstname)
    .value();
