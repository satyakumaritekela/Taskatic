import React from "react"
import { Col } from "react-bootstrap"
import { FaTumblr } from "react-icons/fa"
import { Link } from "react-router-dom"

const Logo = () => (
    <Col style={{ paddingLeft: "45px", paddingTop: "17px", paddingBottom: "15px" }}>
        <Link to="/">
            <span style={{ display: "inline-block", textAlign: "center"}}><FaTumblr size="3em" style={{ "color": "#3f5b77" }} /></span>
            <p style={{ display: "inline-block" }}>
                <b>Taskatic</b>
            </p>
        </Link>
    </Col>
)

export default Logo