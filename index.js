
const express = require("express")
const cors = require("cors")
const upload = require("./multerConfig.js")
const extractTextFromPdf = require("./utils/extractTextFromPdf.js")
const app = express()
app.use(cors())
const PORT = 4000




app.post('/get-text', upload.single("file"), async (req, res) => {
    try {
        const filePath = req.file.path;
        const text = await extractTextFromPdf(filePath)
        res.send(text)

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error deleting file: ${filePath}`, err);
            } else {
                console.log(`File deleted: ${filePath}`);
            }
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "internal server error",
            errror: error
        })
    }
})





app.listen(PORT, () => {
    console.log(`server is listing on http://localhost:${PORT}`)
})