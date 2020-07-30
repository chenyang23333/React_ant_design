import { NavLink } from "umi";
import React from "react";
function myApp() {
  return (
    <div>
      {/* same as Link */}
      <NavLink to="/about">About</NavLink>
      {/* The class to give the element when it is active.
          The default given class is active.
          This will be joined with the className prop
      */}
      <NavLink to="/faq" activeClassName="selected">
        FAQs
      </NavLink>
      {/* The styles to apply to the element when it is active */}
      <NavLink
        to="/faq"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        FAQs
      </NavLink>
      {/* When true, the active class/style will only be applied
          if the location is matched exactly.
      */}
      <NavLink exact to="/profile" activeClassName="selected">
        Profile
      </NavLink>
      {/* When true, the trailing slash on a location’s pathname
          will be taken into consideration when determining if
          the location matches the current URL.
      */}
      <NavLink strict to="/profile/" activeClassName="selected">
        Profile
      </NavLink>
      {/* A function to add extra logic for determining whether
          the link is active. This should be used if you want to
          do more than verify that the link’s pathname matches
          the current URL’s pathname.
      */}
      <NavLink
        to="/profile"
        exact
        activeClassName="selected"
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          return location.search.includes("name");
        }}
      >
        Profile
      </NavLink>
    </div>
  );
}

export default myApp;
