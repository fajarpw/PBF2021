import React, { Component } from "react";
import './MahasiswaDetail.css';
import Profile from '../../component/MahasiswaProfile/MahasiswaProfile'


class DetailMahasiswa extends Component {

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

    tambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa }; //clone data state ke dalam variable formInsertArtikel menggunakan spread
        let timestamp = new Date().getTime();   //wakti digunakan sebagai id
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value; //menyimpan data onchange ke forminsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    tombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa/',
            {
                method: 'post',
                headers: {
                    'Accept': 'aaplication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.insertMahasiswa)
            })
            .then((Response) => {
                this.getMahasiswaData();
            });
    }

    getMahasiswaData() {
        fetch('http://localhost:3001/mahasiswa')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        this.getMahasiswaData()
    }

    hapusMahasiswa = (data) => {
        fetch('http://localhost:3001/mahasiswa/' + data, { method: 'DELETE' })
            .then(Response => {
                this.getMahasiswaData()
            })
    }

    render() {
        return (
            <div className="list-mhs">

                <div className="form">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="nim" id="nim" rows="3" onChange={this.tambahMahasiswa} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="nama" id="nama" onChange={this.tambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="alamat" id="alamat" onChange={this.tambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="angkatan" id="angkatan" onChange={this.tambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="status" id="status" onChange={this.tambahMahasiswa} />
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

export default DetailMahasiswa;