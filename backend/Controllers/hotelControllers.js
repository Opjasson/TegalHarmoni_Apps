import { response } from "express";
import data from "../Model/dataModel.js";

export async function getData(req, res) {
    try {
        const response = await data.findAll({
            attributes: ["id", "nama", "deskripsi", "maps", "createdAt"],
        });
        res.status(200).json({
            msg : "Data berhasil didapatkkan!", 
            data : response});
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

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
