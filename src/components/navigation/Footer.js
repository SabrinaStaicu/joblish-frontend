
import React from "react";

const FooterPage = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p style={{color:"white"}} class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
             
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
          <h6>Contact</h6>
            <ul class="footer-links">
              <li><a href="/">Address</a></li>
              <li><a href="/">Email</a></li>
              <li><a href="/">Phone</a></li>
              <li><a href="/">Fax</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#">Joblish</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
