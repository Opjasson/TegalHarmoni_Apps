import { response } from "express";
import hotel from "../Model/hotelModel.js";

export async function getData(req, res) {
    try {
        const response = await hotel.findAll({
            attributes: ["id", "nama", "deskripsi", "img", "maps", "createdAt"]
        });
        res.status(200).json(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

export async function addData(req, res) {
    const { nama, deskripsi, img, maps } = req.body;
    try {
        await hotel.create({
            nama : nama,
            deskripsi : deskripsi,
            img : img,
            maps : maps,
        });
        res.status(201).json({ msg: "Data berhasil ditambahakan!" });
    } catch (error) {
        res.status(400).json({ msg: "Internal server error!" });
    }
}
