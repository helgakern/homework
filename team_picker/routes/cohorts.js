const express = require("express");
const router = express.Router();
const utils = require("../utils");
const queries = require("../db/queries");

router.get("/", (req, res) => {
    res.render('home');
});

router.get("/cohorts", (req, res) => {
    queries.getAll().then(cohorts => {
        res.render('cohorts', {
            cohorts
        });
    });
});

router.get("/cohorts/new", (req, res) => {
    res.render("new");
});

router.post("/cohorts", (req, res, next) => {
    queries.add({
        name: req.body.name,
        members: req.body.members,
        logoUrl: req.body.logoUrl
    }).then(cohort => {
        res.redirect('/cohorts');
    });
});

router.delete("/cohorts/:id", (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.redirect('/cohorts');
    });
});

router.get("/cohorts/:id", (req, res) => {
    const method = req.query.method;
    const quantity = req.query.quantity;
    const {
        id
    } = req.params;
    queries.getOne(id).then(cohort => {
        res.render('show', {
            cohort,
            method,
            quantity,
            utils
        });
    });
});

router.get("/cohorts/:id/edit", (req, res) => {
    queries.getOne(req.params.id).then(cohort => {
        res.render('edit', {
            cohort
        });
    });
});

router.patch('/cohorts/:id', (req, res) => {
    queries.edit(req.params.id, {
        name: req.body.name,
        members: req.body.members,
        logoUrl: req.body.logoUrl
    }).then(() => {
        res.redirect('/cohorts');
    });
});

module.exports = router;