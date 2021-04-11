import React, { Component } from "react";
import './MahasiswaDetail.css';
import Profile from '../../component/MahasiswaProfile/MahasiswaProfile'
import API from '../../services/index'


class MahasiswaDetail extends Component {

    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            angkatan: "",
            status: ""
        }
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa["id"] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
          insertMahasiswa: formInsertMahasiswa,
        });
    }

    tombolSimpan = () => {
        API.postMahasiswa(this.state.insertMahasiswa)
            .then((Response) => {
                this.ambilDataDariServer();
            });
    }

    ambilDataDariServer = () => {
        API.getMahasiswa()
            .then(result => {
                this.setState({
                    listMahasiswa: result
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServer()
    }

    hapusMahasiswa = (data) => {
        API.deleteMahasiswa(data) 
            .then(Response => {
                this.ambilDataDariServer()
            })
    }

    render() {
        return (
            <div className="list-mhs">

                <div className="form">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="nim" id="nim" rows="3" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="nama" id="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="alamat" id="alamat" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="angkatan" id="angkatan" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="status" id="status" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.tombolSimpan}>Simpan</button>
                </div>
                {
                    this.state.listMahasiswa.map(mhs => {
                        return <Profile key={mhs.id} nim={mhs.nim} nama={mhs.nama} alamat={mhs.alamat} angkatan={mhs.angkatan} status={mhs.status} idMahasiswa={mhs.id} hapusMahasiswa={this.hapusMahasiswa} />
                    })
                }
            </div>

        )

    }
}

export default MahasiswaDetail;