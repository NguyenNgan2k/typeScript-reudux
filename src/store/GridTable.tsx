import React from 'react';
import { data } from '../data';
import PerfectScrollBar from "react-perfect-scrollbar";

interface Props {

}

const GridTable: React.FC<Props> = (props) => {
    console.log(data)
    return (
        <>
            <div className='grid'>
                <div>Id</div>
                <div>First name</div>
                <div>Last name</div>
                <div>Email</div>
                <div>Gender</div>
                <div>Birth Day</div>
                <div>Phone</div>
                <div>Tel</div>
                <div>Card Id</div>
                <div>Ip address</div>
                <div>Address</div>
                <div>City</div>
                <div>Color</div>
                <div>Pass word</div>
                <div>Cash value</div>
                <div>App name</div>
                <div>App Version</div>
                <div>Product</div>
                <div>Car</div>
                <div>Car model</div>
                <div>Car Model Year</div>
                <div>Domain Name</div>
                <div>File Name</div>
                <div>User name</div>
                <div>FaceBook</div>
                <div>Language</div>
                <div>SSN</div>
                <div>Title</div>
                <div>Job</div>
                <div>Slogan</div>
                <div>University</div>
                <div>Race</div>
                <div>Suffix</div>
                <div>Movie Title</div>
                <div>Plant Family</div>
                <div>Country</div>
                <div>Country Code</div>
                <div>City1</div>
                <div>City2</div>
                <div>City3</div>
                <div>City4</div>
                <div>City5</div>
                <div>City6</div>
                <div>City7</div>
                <div>City8</div>
                <div>City9</div>
                <div>City10</div>
                <div>City11</div>
                <div>City12</div>
                <div>City13</div>
                {
                    data && data.map((item: any) => {
                        return (
                            <div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default GridTable;
