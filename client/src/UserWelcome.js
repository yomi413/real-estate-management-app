import React, { Component } from "react";
import { Link } from "react-router-dom";
import Buildings from "./components/Buildings";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";

class UserWelcome extends Component {
  render() {
    // const currentUser = localStorage["json.sessionUid"];

    // if (currentUser) {

    //   return (
    //     <h1>Welcome {this.props.user}</h1>
    //   <Buildings />;
    // } else {
    //   return
    // }

    return (
      <React.Fragment>
        <div>
          <NavBar />
          <h1>Welcome!</h1>
          <p>Your buildings.</p>

          <Buildings />

          {/* <ul>
          <li>
            {this.current_user.buildings.map(building => {
              return building.address;
            })}
          </li>
        </ul> */}
          <br />
          <Link to="/building/new">New Building</Link>
          <br />
          <Link to="/buildings">Existing Building</Link>
        </div>
        <div>
          <h1>Important Resources</h1>
          <p>
            <a href="http://www.ocwen.com/ocwencustomers">
              PHH Mortgage Corporation
            </a>
          </p>
        </div>

        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default UserWelcome;
