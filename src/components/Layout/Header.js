import classes from "./Header.module.css";


const Header = () => {
    return(
       <header style={{ backgroundColor: "#563d7c" }}> 
       <div className="ml-3">   
       <a className={classes.logo} href="#">
      <img
        src="images\Logos\logoKMA.png"
        width={100}
        height={50}
        alt=""
      />
    </a>
      </div>   
       </header>  
    );
};

export default Header;