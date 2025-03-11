import data from "../Model/dataModel";

export async function addData(req, res) {
    const { nama, deskripsi, maps } = req.body;
    try {
        await data.create({
            nama,
            deskripsi,
            maps,
        });
        res.status(201).json({ msg: "Data berhasil ditambahakan!" });
    } catch (error) {
        res.status(400).json({ msg: "Internal server error!" });
    }
}
