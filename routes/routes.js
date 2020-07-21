const express = require('express');

const { getReportData } = require('../controllers/ReportsController');

const router = express.Router();

router
    .route('/getReportData')
    .get(getReportData)

module.exports = router;