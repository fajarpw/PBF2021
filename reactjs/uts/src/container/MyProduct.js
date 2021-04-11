import React, { Component } from 'react'
import Product from '../components/Product'
import Alert from 'react-bootstrap/Alert'

class MyProduct extends Component {

    state = {
        listProduct: [],
        listToCart: {
            id: 0,
            namaBarang: "",
            gambarBarang: "",
            jumlahBarang: 0,
            stokBarang: 0,
            hargaBarang: 0,
            totalHarga: 0
            // tanggalPembelian: ""
        }
    }

    ambilDataDariServer() {
        fetch('http://localhost:3001/produk')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduct: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServer()
    }

    handleGetProductById = (productID) => {

        fetch('http://localhost:3001/produk/' + productID, { method: 'GET' })
            .then(Response => Response.json())
            .then(productDetail => {
                let productToCart = { ...this.state.listToCart }
                productToCart['id'] = productDetail['id']
                productToCart['namaBarang'] = productDetail['nama']
                productToCart['gambarBarang'] = productDetail['gambar']
                productToCart['jumlahBarang'] = 1
                productToCart['stokBarang'] = productDetail['stok']
                productToCart['hargaBarang'] = productDetail['harga']
                productToCart['totalHarga'] = productDetail['harga']
                this.setState({
                    listToCart: productToCart
                })
            })
            .then(() => {
                this.handleAddToCart()
            })
    }

    handleAddToCart = () => {
        fetch('http://localhost:3002/cart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.listToCart)
        })
            .then((Response) => {
                this.ambilDataDariServer()
            })
    }

    render() {
        return (
            <div className='my-product'>
                {
                    this.state.listProduct.map(produk => {
                        return <Product id={produk.id} nama={produk.nama} harga={produk.harga} gambar={produk.gambar} stok={produk.stok} addToCart={this.handleGetProductById} />
                    })
                }
            </div>
        )
    }
}

export default MyProduct;