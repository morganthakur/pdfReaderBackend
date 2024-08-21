const fs = require("fs");
const pdf = require("pdf-parse")

const extractTextFromPdf = async (path) => {
    try {
        const dataBuffer = fs.readFileSync(path);
        console.log(dataBuffer)
        const data = await pdf(dataBuffer)
        console.log(data, "data")
        const text = data.text
        return text
    } catch (error) {
        console.log(error)
    }
}


module.exports = extractTextFromPdf;