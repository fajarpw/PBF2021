import React, { Component } from 'react'
import Cart from '../components/Cart'

class MyCart extends Component {

    state = {
        listCart: [],
        selectedCart: {
            id: 0,
            namaBarang: "",
            gambarBarang: "",
            jumlahBarang: 0,
            stokBarang: 0,
            totalHarga: 0
            // tanggalPembelian: ""
        }
    }

    ambilDataDariServer() {
        fetch('http://localhost:3002/cart')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listCart: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServer()
    }

    handleHapusCart = (cartID) => {
        fetch('http://localhost:3002/cart/' + cartID, { method: 'DELETE' })
            .then(Response => {
                this.ambilDataDariServer()
            })
    }


    handleAddQuantity = (cartID) => {
        let id = cartID
        fetch('http://localhost:3002/cart/' + cartID, { method: 'GET' })
            .then(Response => Response.json())
            .then(cartDetail => {
                let updatedCart = { ...this.state.selectedCart }
                updatedCart['id'] = cartDetail['id']
                updatedCart['namaBarang'] = cartDetail['namaBarang']
                updatedCart['gambarBarang'] = cartDetail['gambarBarang']
                updatedCart['jumlahBarang'] = cartDetail['jumlahBarang'] + 1
                updatedCart['stokBarang'] = cartDetail['stokBarang']
                updatedCart['hargaBarang'] = cartDetail['hargaBarang']
                updatedCart['totalHarga'] = cartDetail['hargaBarang'] * updatedCart['jumlahBarang']
                this.setState({
                    selectedCart: updatedCart
                })
            })
            .then(() => {
                    this.handleUpdateQuantity(id)
                    this.ambilDataDariServer()

            })
    }

    handleRemoveQuantity = (cartID) => {
        let id = cartID
        fetch('http://localhost:3002/cart/' + cartID, { method: 'GET' })
            .then(Response => Response.json())
            .then(cartDetail => {
                let updatedCart = { ...this.state.selectedCart }
                updatedCart['id'] = cartDetail['id']
                updatedCart['namaBarang'] = cartDetail['namaBarang']
                updatedCart['gambarBarang'] = cartDetail['gambarBarang']
                updatedCart['jumlahBarang'] = cartDetail['jumlahBarang'] - 1
                updatedCart['stokBarang'] = cartDetail['stokBarang']
                updatedCart['hargaBarang'] = cartDetail['hargaBarang']
                updatedCart['totalHarga'] = cartDetail['hargaBarang'] * updatedCart['jumlahBarang']
                this.setState({
                    selectedCart: updatedCart
                })
            })
            .then(() => {
                    this.handleUpdateQuantity(id)
                    this.ambilDataDariServer()

            })
    }

    handleUpdateQuantity = (cartID) => {
        fetch('http://localhost:3002/cart/' + cartID, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.selectedCart)
        })
    }

    render() {
        return (
            <div className='my-cart'>
                {
                    this.state.listCart.map(cart => {
                        return <Cart id={cart.id} nama={cart.namaBarang} gambar={cart.gambarBarang} jumlah={cart.jumlahBarang} total={cart.totalHarga} hapusCart={this.handleHapusCart} tambahJumlah={this.handleAddQuantity} kurangiJumlah={this.handleRemoveQuantity}/>
                    })
                }
            </div>
        )

    }
}
export default MyCart;