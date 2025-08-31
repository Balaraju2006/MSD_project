import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [loginBtnLabel, setLoginBtnLabel] = useState("Login");

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    setPickupDate(tomorrow.toISOString().split("T")[0]);
    setReturnDate(nextWeek.toISOString().split("T")[0]);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Login successful! Welcome back, ${email}`);
    setLoginBtnLabel(`Welcome, ${email.split("@")[0]}`);
    setLoginOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert(`Account created successfully! Welcome, ${name}`);
    setSignupOpen(false);
    setLoginBtnLabel(`Welcome, ${name}`);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setLoginBtnLabel("Login");
    }
  };

  const searchCars = () => {
    const location = document.getElementById("pickup-location").value;
    if (!location || !pickupDate || !returnDate) {
      alert("Please select location and dates");
      return;
    }
    if (new Date(pickupDate) >= new Date(returnDate)) {
      alert("Return date must be after pickup date");
      return;
    }
    alert(`Searching for cars in ${location} from ${pickupDate} to ${returnDate}...`);
  };

  return (
    <>
      {/* Inline CSS for quick setup */}
      <style>{`
        body { margin: 0; font-family: Arial, sans-serif; background: linear-gradient(135deg, #f5f7fa, #c3cfe2); }
        .header { display:flex; justify-content:space-between; align-items:center; padding:15px 40px; background:white; position:fixed; top:0; left:0; right:0; box-shadow:0 2px 10px rgba(0,0,0,0.1); z-index:100; }
        .logo { font-size:24px; font-weight:bold; display:flex; align-items:center; }
        .logo::before { content:"🚗"; margin-right:10px; }
        .nav { display:flex; gap:25px; align-items:center; }
        .nav a { text-decoration:none; color:#666; }
        .nav a:hover { color:#4285f4; }
        .login-btn { background:#4285f4; color:white; padding:10px 20px; border:none; border-radius:20px; cursor:pointer; }
        .main-content { margin-top:100px; text-align:center; padding:20px; }
        .hero-title { font-size:40px; font-weight:bold; margin-bottom:40px; }
        .booking-form { background:white; border-radius:20px; padding:30px; box-shadow:0 10px 30px rgba(0,0,0,0.1); display:flex; flex-wrap:wrap; justify-content:center; gap:20px; max-width:800px; margin:auto; }
        .form-group { display:flex; flex-direction:column; min-width:150px; }
        .form-group label { margin-bottom:8px; font-size:14px; }
        .form-group input, .form-group select { padding:10px; border:2px solid #ddd; border-radius:8px; }
        .search-form-btn { background:#4285f4; color:white; padding:12px 25px; border:none; border-radius:10px; cursor:pointer; margin-top:10px; }
        .car-showcase img { margin-top:40px; max-width:600px; width:100%; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        .modal { position:fixed; top:0; left:0; right:0; bottom:0; display:flex; justify-content:center; align-items:center; background:rgba(0,0,0,0.5); }
        .modal-content { background:white; padding:30px; border-radius:20px; max-width:400px; width:90%; position:relative; }
        .close-btn { position:absolute; top:10px; right:15px; border:none; background:none; font-size:24px; cursor:pointer; }
        .modal form { display:flex; flex-direction:column; gap:15px; }
        .modal input { padding:12px; border:2px solid #ddd; border-radius:8px; }
        .modal-submit-btn { background:#4285f4; color:white; padding:12px; border:none; border-radius:10px; cursor:pointer; font-weight:bold; }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="logo">CarRental</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#cars">Cars</a>
          <a href="#bookings">My Bookings</a>
          <a href="#list">List cars</a>
          {loginBtnLabel === "Login" ? (
            <button className="login-btn" onClick={() => setLoginOpen(true)}>Login</button>
          ) : (
            <button className="login-btn" onClick={handleLogout}>{loginBtnLabel}</button>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="hero-title">Luxury cars on Rent</h1>

        {/* Booking Form */}
        <div className="booking-form">
          <div className="form-group">
            <label>Pickup Location</label>
            <select id="pickup-location">
              <option value="">Please select location</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="pune">Pune</option>
            </select>
          </div>

          <div className="form-group">
            <label>Pick-up Date</label>
            <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Return Date</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </div>

          <button className="search-form-btn" onClick={searchCars}>🔍 Search</button>
        </div>

        {/* Car Showcase */}
        <div className="car-showcase">
          <img src="https://pngimg.com/d/lamborghini_PNG10709.png" alt="Luxury Car" />
        </div>
      </main>

      {/* Login Modal */}
      {loginOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setLoginOpen(false)}>&times;</button>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
              <input type="email" name="email" placeholder="Email address" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit" className="modal-submit-btn">Sign In</button>
              <p>Don’t have an account? <a href="#" onClick={(e)=>{e.preventDefault(); setLoginOpen(false); setSignupOpen(true)}}>Sign up here</a></p>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {signupOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSignupOpen(false)}>&times;</button>
            <h2>Join Us!</h2>
            <form onSubmit={handleSignup}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email address" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit" className="modal-submit-btn">Sign Up</button>
              <p>Already have an account? <a href="#" onClick={(e)=>{e.preventDefault(); setSignupOpen(false); setLoginOpen(true)}}>Login here</a></p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
