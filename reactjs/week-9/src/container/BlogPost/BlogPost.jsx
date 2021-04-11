import React, { Component } from "react";
import './BlogPost.css';
import Post from '../../component/BlogPost/Post';
import API from '../../services/index';

class BlogPost extends Component {
    state = {               //Komponen state dari react untuk statefull component
        listArtikel: [],      //Variable array yang digunakan untuk menyimpan data API
        insertArtikel: {        //Variable yang digunakan untuk menampung sementara data yang akan di insert
            userID: 1,          //Kolom mengikuti yang ada di listArtikel.json
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServer = () => {
        API.getNewsBlog()
            .then(result => {
                this.setState({
                    listArtikel: result
                })
            })
    }

    componentDidMount() {    //Komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServer()
    }

    handleHapusArtikel = (data) => { //Fungsi yang menghandle button action hapus data
        API.deleteNewsBlog(data) // alamat url api yang ingin kita hapus datanya
            .then(Response => { //Ketika proses hapus berhasil, maka ambil data dari server API Lokal
                this.ambilDataDariServer()
            })
    }

    handleTambahArtikel = (event) => {    //fungsi untuk meng handle form tambah data artikel
        let formInsertArtikel = { ...this.state.insertArtikel }; //clone data state ke dalam variable formInsertArtikel menggunakan spread
        let timestamp = new Date().getTime();   //waktu digunakan sebagai id
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value; //menyimpan data onchange ke forminsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertArtikel)
            .then((Response) => {
                this.ambilDataDariServer();
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="post-artikel">
                        <div className="form pb-2 border-bottom">
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                                <div className="col-sm-10">
                                    <input className="form-control" name="title" id="title" rows="3" onChange={this.handleTambahArtikel} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row" style={{ marginTop: "10px" }}>
                        <label htmlFor="body " className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {     //Looping dan masukkan setiap data yang yang ada di listArtikel ke variable artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} /> //Mapping data JSON dari API sesuai kategorinya
                    })
                }

            </div>

        );
    }
}
export default BlogPost;