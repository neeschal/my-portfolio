import React from "react";

const LocationMap = () => {
  return (
    <div className="mb-18">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d81264.12571335878!2d139.7247572981784!3d35.63264211492605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjp!4v1789107065712!5m2!1sen!2sjp"
        width="100%"
        height="300"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </div>
  );
};

export default LocationMap;
