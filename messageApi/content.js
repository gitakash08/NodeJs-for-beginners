module.exports = {
    sum: (req, res) => {
        let first = req.query.fist;
        let second = req.query.second;
        let result = first + second;
        return res.status(200).json({ status: 'OK', data: result });
    },
    displayName: (req, res) => {
        let first = req.query.fName;
        let second = req.query.lName;
        let result = `${first}  ${second}`;
        return res.status(200).json({ status: 'OK', data: result });
    },
    displayName: (req, res) => {
        let first = req.query.fName;
        let second = req.query.lName;
        let result = `${first}  ${second}`;
        return res.status(200).json({ status: 'OK', data: result });
    }
}