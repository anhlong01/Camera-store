import classes from "./Footer.module.css";

const Footer =() =>{
    return(
    <footer className={classes.footer}>
    {/* Links */}
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4 pt-3 pb-1">
    <h6 className="text-uppercase font-weight-bold">Thông tin liên hệ:</h6>
    <hr
      className="bg-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
      style={{ width: 160, height: 2 }}
    />
    <p>
      <i className="fas fa-home mr-3" />
      141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội
    </p>
    <p>
      <i className="fas fa-envelope mr-3" /> superlong231@gmail.com
    </p>
    <p>
      <i className="fas fa-phone mr-3" /> 0348691658
    </p>
    </div>
  </footer>
    );
};

export default Footer;