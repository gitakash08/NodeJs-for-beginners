const { config } = require("dotenv");

module.exports = {
    welcome: (req, res) => {
        let result = `Heyyy Gautam speaking!!`
        res.status(200).json({ status: 'OK', data: result });
    },
    getCensusData: (req, res) => {
        let query = `select * from B1_CensusData`;
        try {
            db.connect(config, (error) => {
                if (error)
                    console.log(error);
                var request = new db.Request();
                request.query(query, (error, result) => {
                    if (error) {
                        log.info("getCensusData. [" + error + "], [Something went wrong. Please try again after sometime]");
                        return res.status(500).json({ status: 'NOK', data: error, messages: "please try again after sometime" })
                    }
                    return res.status(200).json({ status: 'OK', data: result.recordset })
                });
            })
        } catch (error) {
            return res.status(500).json({ status: 'NOK', data: error, messages: "Something went wrong. Please try again later" })
        }
    }
}