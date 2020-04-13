const knex = require("./client");

module.exports = {
    // This will get all Cohorts:
    getAll() {
        return knex("cohorts").select("*");
    },
    // This will get just one Cohort:
    getOne(id) {
        return knex("cohorts")
            .where("id", id)
            .first();
    },
    // This will create a new Cohort:
    add(cohort) {
        return knex("cohorts").insert(cohort, "*");
    },
    // This will edit the Cohort:
    edit(id, cohort) {
        console.log(id, ":", cohort);
        return knex("cohorts")
            .where("id", id)
            .update(cohort, "*");
    },
    // This will delete the Cohort:
    delete(id) {
        return knex("cohorts")
            .where("id", id)
            .del();
    }
};