import Land from "../image/Land.jpg";
import Garage from "../image/Garage.jpg";
import Building from "../image/Building.jpg";
import Apartment from "../image/Apartment1.jpg";
import Shop from "../image/Shop.jpg";
import Plot from "../image/Plot.jpg";
import Villa from "../image/Villa.jpg";
import Office from "../image/Office1.jpg";

function propertyType() {
    return(
        <>
          <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "900px" }}
            >
              <h1 className="mb-3">Property Types</h1>
              <p>
                There are five main categories of real estate which include
                residential, commercial, industrial, raw land, and special use.
                Investing in real estate includes purchasing a home, rental
                property, or land. Indirect investment in real estate can be
                made via REITs or through pooled real estate investment.
              </p>
            </div>
            <div className="row g-4">
              {/* Repeat the following block for each property type */}
              {propertyTypes.map((propertyType, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay={`${0.1 * ((index % 4) + 1)}s`}
                >
                  <a
                    className="cat-item d-block bg-light text-center rounded p-3"
                    href=""
                  >
                    <div className="rounded p-4">
                      <div className="icon mb-3">
                        <img
                          style={{
                            width: "250px",
                            height: "20vh",
                            borderRadius: "50px",
                          }}
                          className="img-fluid"
                          src={propertyType.icon}
                          alt="Icon"
                        />
                      </div>

                      <h6>{propertyType.name}</h6>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
    );
}
const propertyTypes = [
  { name: "Apartment", icon: Apartment },
  { name: "Villa", icon: Villa },
  { name: "Office", icon: Office },
  { name: "Building", icon: Building },
  { name: "Plot", icon: Plot },
  { name: "Land", icon: Land },
  { name: "Shop", icon: Shop },
  { name: "Garage", icon: Garage },
];
export default propertyType;