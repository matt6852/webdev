import {faFacebook,faGoogle} from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
    return (
      <div className="services">
        <h1 className="py-5"> My service </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className ="icon" icon={faDesktop} size="2x" />
                </div>
                <h3>Web design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores sequi dolorum distinctio pariatur incidunt!
                </p>
              </div>
            </div>
            {/* end singl col */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className ="icon" icon={faFileCode} size="2x" />
                </div>
                <h3>Web development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores sequi dolorum distinctio pariatur incidunt!
                </p>
              </div>
            </div>
            {/* end singl col */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className ="icon" icon={faFacebook} size="2x" />
                </div>
                <h3>Web production</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores sequi dolorum distinctio pariatur incidunt!
                </p>
              </div>
            </div>
            {/* end singl col */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className ="icon" icon={faGoogle} size="2x" />
                </div>
                <h3>Web production</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores sequi dolorum distinctio pariatur incidunt!
                </p>
              </div>
            </div>
            {/* end singl col */}
          </div>
        </div>
      </div>
    );
}
