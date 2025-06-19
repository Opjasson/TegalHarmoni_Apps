import codeVoucher from "../Model/codeVoucher.js";

export const createVoucher = async (req, res) => {
    // const response = await codeVoucher.findAll()
    // if () {

    // }
    try {
        const { code } = req.body;
        await codeVoucher.create({
            code,
        });
        res.status(200).json({ msg: "Code voucher berhasil dibuat!" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
