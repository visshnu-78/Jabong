import React, { Component } from 'react'
import './mainpage.css'
import { Link } from 'react-router-dom'

export default class mainpage extends Component {
    render() {
        return (
            <div>
                <Link to = '/products'>
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/1/130b6d4c-5207-44ab-8570-2ec5b6402ceb1561965015495-HomePage_1300X470.jpg" width="100%"></img>
                </Link>
                <div className="both">
                    <span className="men">
                        <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/d498cf13-5122-48f6-9fdd-4cf4c0a0e0bc1562152211050-Sportswear_1.jpg"></img>
                    </span>
                    <span className="women">
                        <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/8f371a1d-2f68-428a-adc1-41d6950b91731562152211079-Sportswear_2.jpg"></img>
                    </span>
                </div>
                <div className="extras">
                    <span>
                        <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/611d3e75-072d-4212-a1f6-0db4c79235c01562152211072-SubCategroy_01.jpg"></img>
                    </span>
                    <span>
                        <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/a2440f60-9299-4e12-b394-eb0d423d0f091562152211065-SubCategroy_02.jpg"></img>
                    </span>
                    <span>
                        <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/40aa66e0-c038-4e55-a59a-63c18e1582371562152211057-SubCategroy_03.jpg"></img>
                    </span>
                </div>
            </div>
        )
    }
}
