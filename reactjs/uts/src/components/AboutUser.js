import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUser = (props) => {
    return (
        <Row>
            <Col>
                <div className="aboutUser">
                    <div className="userPhoto">
                        <img alt="userPhoto" src={props.gambar}/>
                    </div>
                    <div className="userDetail">
                        <p>
                            Nama: {props.nama} <br></br>
                            NIM/Kelas: {props.nim} / {props.kelas}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

    )

}

export default AboutUser;