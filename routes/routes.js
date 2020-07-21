const express = require('express');

const { getReportData } = require('../controller/ReportsController');

const router = express.Router();

router
    .route('/getReportData')
    .get(getReportData)

module.exports = router;