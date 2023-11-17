export default function Navbar({setCategory,category,setCountry,country}){
    return(
        <>
        <nav className="navbar navbar-expand-lg ng border-bottom border-body fixed-top" data-bs-theme="dark">
  <div className="container-fluid ">
    <h4 className="navbar-brand p-2 m-2 bg-white text-dark rounded-4 " onClick={() => setCategory("general")}><i class="fa-solid fa-earth-americas fa-spin"></i> Newz Now</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" onClick={() => setCategory("general")}><i class="fa-solid fa-house"></i> Home </p>
        </li>
        
        <li class="nav-item dropdown">
          <p class="nav-link dropdown-toggle active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-filter"></i>  Category : {category}
          </p>
          <ul class="dropdown-menu rounded-4 border border-info">
            <li><p class="dropdown-item" onClick={() => setCategory("business")}><i class="fa-solid fa-business-time"></i> Business</p></li>
            <li><p class="dropdown-item" onClick={() => setCategory("entertainment")}><i class="fa-solid fa-compact-disc"></i> Entertainment</p></li>
            <li><p class="dropdown-item" onClick={() => setCategory("health")}><i class="fa-solid fa-briefcase-medical"></i> Health</p></li>
            <li><p class="dropdown-item" onClick={() => setCategory("science")}><i class="fa-solid fa-flask-vial"></i> Science</p></li>
            <li><p class="dropdown-item" onClick={() => setCategory("sports")}><i class="fa-solid fa-baseball-bat-ball"></i> Sports</p></li>
            <li><p class="dropdown-item" onClick={() => setCategory("technology")}><i class="fa-solid fa-microchip"></i> Technology</p></li>
            <li><hr class="dropdown-divider"/></li>
            <li><p class="dropdown-item" onClick={() => setCategory("general")}><i class="fa-solid fa-arrow-left"></i> Back</p></li>
          </ul>
        </li>

        <li class="nav-item dropdown ">
          <p class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-globe"></i> Country : {country}
          </p>
          <ul class="dropdown-menu rounded-4 border border-info">
            <li><p class="dropdown-item" onClick={() =>setCountry("au")}>Australia</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("ca")}>Canada</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("ch")}>Switzerland</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("cn")}>China</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("ie")}>Ireland</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("in")}>India</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("it")}>Italy</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("jp")}>Japan</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("kr")}>South korea</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("nz")}>New Zealand</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("ru")}>Russia</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("sa")}>Saudi Arabia</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("sg")}>Singapore</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("us")}>United States</p></li>
            <li><p class="dropdown-item" onClick={() =>setCountry("gb")}>United Kingdom</p></li>
           </ul>
        </li>


        <li className="nav-item">
          <p className="nav-link active" href="https://muralidharan.netlify.app" target="blank"><i class="fa-solid fa-person fa-fade"></i> Developer</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br />
<br />
<br />
        </>
    );
}