import React from "react";
import Logo from "../assets/logo/logo.png";
export default function Aboutus() {
  return (
    <div className="mt-10 w-fit flex flex-col justify-center content-center px-10 mx-10 text-start gap-3">
      <div className="flex justify-center content-center">
        <img src={Logo} alt="Viajira'logo" height={150} width={150} />
      </div>
      <h3>
        &nbsp; &nbsp; &nbsp; &nbsp; Welcome to Viajira! We're not just a
        website; we're your go-to destination for everything web development. If
        you're passionate about creating stunning websites, mastering coding
        languages, and staying up-to-date with the latest industry trends,
        you've come to the right place.
      </h3>
      <h2 className="text-center text-4xl max-md:text-2xl  max-md:mx-0 max-md:px-3">
        Our Mission
      </h2>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Our mission is to empower and inspire web
        developers of all levels, from beginners to seasoned professionals. We
        believe that the web development community should be a vibrant,
        collaborative, and inclusive space where everyone can learn, grow, and
        share their knowledge.
      </p>
      <h2 className="text-center text-4xl max-md:text-2xl  max-md:mx-0 max-md:px-3">
        {" "}
        What We Offer
      </h2>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Educational Resources: We offer a wealth of
        educational content, from tutorials and guides for beginners to advanced
        topics for experts. Whether you're interested in front-end development,
        back-end programming, or design principles, we've got you covered.
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Inspiration: Explore our portfolio of
        stunning websites and applications from around the web. Get inspired by
        the latest design trends and innovative functionalities.
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Community: Join our community forum, where
        developers from all over the world gather to discuss ideas, solve
        problems, and share their experiences. It's a place to connect, ask
        questions, and get answers from your fellow developers.
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; News and Updates: Stay current with the
        latest news and trends in the ever-evolving world of web development.
        Our blog covers topics like responsive design, JavaScript frameworks,
        and industry events.
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Tools and Resources: Access a curated
        selection of web development tools, from code editors and design
        software to hosting providers and testing resources.
      </p>
      <h2 className="text-center text-4xl max-md:text-2xl  max-md:mx-0 max-md:px-3">
        Our Team
      </h2>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; We're a passionate group of web developers,
        designers, and tech enthusiasts who have come together to create a hub
        for all things web development. Our team has years of experience in the
        industry, and we're dedicated to providing you with the best resources
        and insights to help you succeed.
      </p>
      <h2 className="text-center text-4xl max-md:text-2xl  max-md:mx-0 max-md:px-3">
        Get Involved
      </h2>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; We encourage you to get involved with our
        community. Share your projects, ask questions, and help others on their
        development journeys. We believe that collaboration and learning from
        one another are the keys to success in this field.
      </p>
      <h2 className="text-center text-4xl max-md:text-2xl  max-md:mx-0 max-md:px-3">
        Contact Us
      </h2>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Do you have questions, suggestions, or just
        want to say hello? We'd love to hear from you! Feel free to reach out to
        us via Git Hub, social media like Facebook, Instagram and Twitter. Your
        feedback is essential to making this website even better.
      </p>
      <h3>
        Thank you for visiting Viajira. We're excited to be part of your web
        development journey, and we can't wait to see the amazing things you'll
        create. Stay curious, keep coding, and make the web a better place!
      </h3>
    </div>
  );
}
