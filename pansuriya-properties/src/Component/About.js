import { Link } from "react-router-dom";

function About(){
    return(
        <>
         <div class="container-xxl py-5">
          <div class="container">
            <div class="row g-5 align-items-center">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="about-img position-relative overflow-hidden p-5 pe-0">
                  <img class="img-fluid w-100" src={"../img/about.jpg"} />
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 class="mb-4">No. 1 Place To Find The Perfect Property</h1>
                <p class="mb-4">
                Our team assist in finding you a home within your budget and preferred areas. They'll also offer valuable insight and advice.
                Our rentals team will work with you to find the perfect home for you and your family.We review all contracts and ensure you are well informed when entering into the agreement.
                </p>
                <p>
                  <i class="fa fa-check text-primary me-3 ">Search Assistance: Our team searches for available local properties and suggests options for your consideration.</i>
                </p>
                <p>
                  <i class="fa fa-check me-3">Personalised Guided Tours: Accompanied by our experienced agents, you’ll receive guided tours of rental properties matching your preferences.</i>
                </p>
                <p>
                  <i class="fa fa-check text-primary me-3">Exit Inspection Support: When it’s time to move out, we facilitate the exit inspection to ensure a smooth process.</i>
                </p>
                <p>
                  <i class="fa fa-check me-3">Rental Offer Submission: Our team takes care of submitting your rental offer, increasing your chances of securing your desired property.</i>
                </p>
                <Link class="btn btn-primary py-3 px-5 mt-3" to="/HomePage">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}
export default About;