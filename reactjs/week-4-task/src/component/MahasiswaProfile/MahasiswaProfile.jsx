import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Profile = (props) => {
    return (

        <Card>
            <Card.Header as="h5">Data Mahasiswa</Card.Header>
            <Card.Body>
                <Card.Title>{props.nama}</Card.Title>
                <Card.Text>
                    <p>
                        {props.nim} <br/>
                        {props.alamat} <br/>
                        {props.angkatan} <br/>
                        {props.status} <br/>
                    </p>
                    </Card.Text>
                <Button variant="danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</Button>
            </Card.Body>
        </Card>
    )
}

export default Profile;
