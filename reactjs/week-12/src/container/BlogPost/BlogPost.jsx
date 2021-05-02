import React, { Component } from 'react'
import './BlogPost.css'
import Post from '../../component/BlogPost/Post'
//import API from '../../services/index'

import firebase from 'firebase'
import firebaseConfig from '../../firebase/config'


class BlogPost extends Component {
    constructor(props) {
        super(props)
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }else {
            firebase.app(); // if already initialized, use that one
         }

        this.state = {
            listArtikel:[]
        }
    }

    ambilDataDariServer = () => {
        let ref = firebase.database().ref('/')
        ref.on('value', snapshot=>{
            const state = snapshot.val()
            this.setState(state)
        })
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
        .ref('/')
        .set(this.state)
    }
 
    componentDidMount() {    
        this.ambilDataDariServer()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state){
            this.simpanDataKeServerAPI()
        }
    }

    handleHapusArtikel = (idArtikel) => { 
        const {listArtikel} = this.state
        const newState = listArtikel.filter(data =>{
            return data.uid !== idArtikel
        })
        this.setState({listArtikel: newState})
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

    handleTombolSimpan = (event) => {
        let title = this.refs.judulArtikel.value
        let body = this.refs.isiArtikel.value
        let uid = this.refs.uid.value

        if(uid && title && body) {
            const {listArtikel} = this.state
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid
            })

            listArtikel[indeksArtikel].title = title
            listArtikel[indeksArtikel].body = body
            this.setState({listArtikel})
        }else if (title && body) {
            const uid = (new Date()).getTime()
            const {listArtikel} = this.state
            listArtikel.push({uid, title, body})
            this.setState({listArtikel}) 
        }

        this.refs.judulArtikel.value = ''
        this.refs.isiArtikel.value = ''
        this.refs.uid.value = ''
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
                                    <input className="form-control" name="title" id="title" rows="3" ref="judulArtikel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group row" style={{ marginTop: "10px" }}>
                        <label htmlFor="body " className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" ref="isiArtikel"></textarea>
                        </div>
                        <input type="hidden" name="uid" ref="uid"/>
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