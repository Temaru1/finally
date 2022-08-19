import React from "react";
import Carousel from 'react-bootstrap/Carousel';


export default function UncontrolledExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 pic"
          src="https://www.cccollision.net/wp-content/uploads/2020/12/Do-Body-Repair-Shops-for-Cars-Fix-Interiors-Too_.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="cartext">
        <div className="pin">
          <h3 className="cartext">Hodge Auto Center</h3>
          <p>Automobile Repairs and Maintenance</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 pic"
          src="https://www.offdutyofficers.com/wp-content/uploads/2019/12/hiring-a-security-guard-company.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption className="cartext">
        <div className="pin">
          <h3 className="cartext">Premier Guards</h3>
          <p>Intelligent and Robust Security Management Solutions</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 pic"
          src="https://www.peopleready.com/wp-content/uploads/2021/04/1000x460_office-cleaning-02-1024x471.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="cartext">
        <div className="pin">
          <h3 className="cartext">Infraserv Nig Ltd</h3>
          <p>
            Leading Facilities Management Company
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
