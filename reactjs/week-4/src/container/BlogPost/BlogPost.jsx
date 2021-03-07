import React, { Component } from "react";
import './BlogPost.css';
import Post from '../../component/BlogPost/Post';

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

    ambilDataDariServer() {
        fetch('http://localhost:3001/posts') //Alamat URL API yang akan digunakan
            .then(Response => Response.json())  //Ubah response dari URL API menjadi sebuah data JSON
            .then(jsonHasilAmbilDariAPI => {    //Data JSON hasil ambil dari API dimasukkan ke dalam listArtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {    //Komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServer()
    }

    handleHapusArtikel = (data) => { //Fungsi yang menghandle button action hapus data
        fetch('http://localhost:3001/posts/' + data, { method: 'DELETE' }) // alamat url api yang ingin kita hapus datanya
            .then(Response => { //Ketika proses hapus berhasil, maka ambil data dari server API Lokal
                this.ambilDataDariServer()
            })
    }

    handleTambahArtikel= (event) =>{    //fungsi untuk meng handle form tambah data artikel
        let formInsertArtikel = {...this.state.insertArtikel}; //clone data state ke dalam variable formInsertArtikel menggunakan spread
        let timestamp = new Date().getTime();   //wakti digunakan sebagai id
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value; //menyimpan data onchange ke forminsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () =>{
        fetch('http://localhost:3001/posts/',
        {method: 'post',
            headers: {
                'Accept': 'aaplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel) //kirimkan ke body request untuk data artikel yang akan ditambahkan
        })
        .then((Response) => {
            this.ambilDataDariServer();
        });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input className="form-control" name="title" id="title" rows="3" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="body " className="col-sm-2 col-form-label">Isi</label>
                    <div className="col-sm-10">
                        <textarea name="body" id="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
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