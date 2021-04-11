import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/640/480/arch/grayscale" alt="gambar_thumbnail_artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <p className="isi-artikel">ID: {props.idArtikel}</p>
                <button className="btn btn-sm btn-warning" onClick ={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    );
}

export default Post;