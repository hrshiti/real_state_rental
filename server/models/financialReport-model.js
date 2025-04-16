const mongoose = require("mongoose")
const financialReportSchema = new mongoose.Schema({
    income: {
        type: String,
        required: true,
    },
    expenses: {
        type: String,
        required: true,
    },
    profitLoss: {
        type: String,
        required: true,
    },
    taxLiabilities: {
        type: String,
        required: true,
    },
    netIncome: {
        type: String,
        required: true,
    },
})
const FinancialReport = mongoose.model("FinancialReport", financialReportSchema)
module.exports = FinancialReport