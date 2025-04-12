import React from "react";
import "./volunte.css";
import Headerr from "../components/Headerr";

function Volunte() {
  return (
    <div className="health-app">
      <Headerr/>

      <main className="main-content">
        <div className="hero-section">
          <h2>BluePulse:A new age of healthcare is here</h2>
          <p className="subtitle">Help Aging People Thrive</p>
        </div>


        <div className="features-grid">
          {/* First row with 3 cards */}
          <div className="feature-card">
            <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="69" viewBox="0 0 71 69" fill="none">
  <path d="M64 52C64 49.8 62.2 48 60 48H48C45.8 48 44 49.8 44 52C44 54.2 45.8 56 48 56H60C62.2 56 64 54.2 64 52ZM48 24C63.436 24 76 36.564 76 52C76 67.436 63.436 80 48 80C32.564 80 20 67.436 20 52C20 36.564 32.564 24 48 24ZM48 16C28.116 16 12 32.116 12 52C12 71.884 28.116 88 48 88C67.884 88 84 71.884 84 52C84 32.116 67.884 16 48 16ZM52 40C52 37.8 50.2 36 48 36C45.8 36 44 37.8 44 40V52C44 54.2 45.8 56 48 56C50.2 56 52 54.2 52 52V40ZM48 32C59.028 32 68 40.972 68 52C68 63.028 59.028 72 48 72C36.972 72 28 63.028 28 52C28 40.972 36.972 32 48 32ZM48 28C41.6348 28 35.5303 30.5286 31.0294 35.0294C26.5286 39.5303 24 45.6348 24 52C24 58.3652 26.5286 64.4697 31.0294 68.9706C35.5303 73.4714 41.6348 76 48 76C54.3652 76 60.4697 73.4714 64.9706 68.9706C69.4714 64.4697 72 58.3652 72 52C72 45.6348 69.4714 39.5303 64.9706 35.0294C60.4697 30.5286 54.3652 28 48 28Z" fill="url(#paint0_linear_48_264)"/>
  <defs>
    <linearGradient id="paint0_linear_48_264" x1="48" y1="16" x2="48" y2="88" gradientUnits="userSpaceOnUse">
      <stop stop-color="#39ECF5"/>
      <stop offset="1" stop-color="#218A8F"/>
    </linearGradient>
  </defs>
</svg></div>
            <h3>Spend a day</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
  <path d="M26.607 10.2327L31.391 15.0244H26.4C21.52 15.0244 16.8399 16.9568 13.3892 20.3965C9.93856 23.8362 8 28.5014 8 33.3659H12.6C12.6 29.7175 14.0539 26.2186 16.6419 23.6388C19.2299 21.0591 22.74 19.6098 26.4 19.6098H31.391L26.584 24.4015L29.85 27.6341L40.2 17.3171L36.957 14.0844L29.85 7L26.607 10.2327ZM54 31.0732V54H17.2V31.0732H54ZM49.4 46.1132V38.9829C48.0174 38.1825 46.868 37.0367 46.065 35.6585H25.135C24.332 37.0367 23.1826 38.1825 21.8 38.9829V46.1132C23.1628 46.9135 24.2956 48.0506 25.089 49.4146H46.065C46.8711 48.0449 48.0203 46.9073 49.4 46.1132ZM35.6 47.122C33.6956 47.122 32.15 45.07 32.15 42.5366C32.15 40.0032 33.6956 37.9512 35.6 37.9512C37.5044 37.9512 39.05 40.0032 39.05 42.5366C39.05 45.07 37.5044 47.122 35.6 47.122Z" fill="url(#paint0_linear_45_240)"/>
  <defs>
    <linearGradient id="paint0_linear_45_240" x1="31" y1="7" x2="31" y2="54" gradientUnits="userSpaceOnUse">
      <stop stop-color="#39ECF5"/>
      <stop offset="1" stop-color="#218A8F"/>
    </linearGradient>
  </defs>
</svg></div>
            <h3>Donate</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M33.75 28.125C31.5 28.125 29.8125 28.9688 28.125 30.375L19.125 25.3125C19.4062 24.4688 19.6875 23.3438 19.6875 22.5C19.6875 21.6562 19.4062 20.5312 19.125 19.6875L28.125 14.625C29.8125 16.0312 31.5 16.875 33.75 16.875C38.5312 16.875 42.1875 13.2188 42.1875 8.4375C42.1875 3.65625 38.5312 0 33.75 0C28.9688 0 25.3125 3.65625 25.3125 8.4375V9.84375L15.4688 15.1875C14.3438 14.625 12.9375 14.0625 11.25 14.0625C6.75 14.0625 2.8125 17.7188 2.8125 22.5C2.8125 27 6.75 30.9375 11.25 30.9375C12.9375 30.9375 14.3438 30.375 15.4688 29.8125L25.3125 35.1562V36.5625C25.3125 41.3438 28.9688 45 33.75 45C38.5312 45 42.1875 41.3438 42.1875 36.5625C42.1875 31.7812 38.5312 28.125 33.75 28.125Z" fill="url(#paint0_linear_48_267)"/>
  <defs>
    <linearGradient id="paint0_linear_48_267" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
      <stop stop-color="#39ECF5"/>
      <stop offset="1" stop-color="#218A8F"/>
    </linearGradient>
  </defs>
</svg></div>
            <h3>Connect</h3>
          </div>

          {/* Second row with 2 cards */}
          <div className="feature-card">
            <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
  <path d="M30.5 10.1667H12.7084C10.6861 10.1667 8.74665 10.97 7.31669 12.4C5.88672 13.8299 5.08337 15.7694 5.08337 17.7917V38.125C5.08337 40.1473 5.88672 42.0867 7.31669 43.5167C8.74665 44.9466 10.6861 45.75 12.7084 45.75L10.1667 48.2917V50.8333H12.7084L17.7917 45.6737L22.875 45.75V33.0417H10.1667V15.25H33.0417V20.3333H38.125V17.7917C38.125 15.7694 37.3217 13.8299 35.8917 12.4C34.4618 10.97 32.5223 10.1667 30.5 10.1667ZM12.7084 35.5833C13.3825 35.5833 14.0289 35.8511 14.5056 36.3278C14.9823 36.8044 15.25 37.4509 15.25 38.125C15.25 38.7991 14.9823 39.4456 14.5056 39.9222C14.0289 40.3989 13.3825 40.6667 12.7084 40.6667C12.0343 40.6667 11.3878 40.3989 10.9111 39.9222C10.4345 39.4456 10.1667 38.7991 10.1667 38.125C10.1667 37.4509 10.4345 36.8044 10.9111 36.3278C11.3878 35.8511 12.0343 35.5833 12.7084 35.5833ZM52.2821 24.5525C51.9263 23.5358 50.9605 22.875 49.8167 22.875H31.5421C30.373 22.875 29.4325 23.5358 29.0513 24.5525L25.4167 34.9987V49.0033C25.4167 49.9692 26.23 50.8333 27.1959 50.8333H28.7717C29.7375 50.8333 30.5 49.8675 30.5 48.9017V45.75H50.8334V48.9017C50.8334 49.8675 51.6213 50.8333 52.5871 50.8333H54.1375C55.1034 50.8333 55.9167 49.9692 55.9167 49.0033V34.9987L52.2821 24.5525ZM31.5421 25.4167H49.8167L52.4346 33.0417H28.9242L31.5421 25.4167ZM30.5 40.6667C29.8259 40.6667 29.1795 40.3989 28.7028 39.9222C28.2262 39.4456 27.9584 38.7991 27.9584 38.125C27.9584 37.4509 28.2262 36.8044 28.7028 36.3278C29.1795 35.8511 29.8259 35.5833 30.5 35.5833C31.1741 35.5833 31.8206 35.8511 32.2973 36.3278C32.7739 36.8044 33.0417 37.4509 33.0417 38.125C33.0417 38.7991 32.7739 39.4456 32.2973 39.9222C31.8206 40.3989 31.1741 40.6667 30.5 40.6667ZM50.8334 40.6667C50.1593 40.6667 49.5128 40.3989 49.0361 39.9222C48.5595 39.4456 48.2917 38.7991 48.2917 38.125C48.2917 37.4509 48.5595 36.8044 49.0361 36.3278C49.5128 35.8511 50.1593 35.5833 50.8334 35.5833C51.5075 35.5833 52.154 35.8511 52.6306 36.3278C53.1073 36.8044 53.375 37.4509 53.375 38.125C53.375 38.7991 53.1073 39.4456 52.6306 39.9222C52.154 40.3989 51.5075 40.6667 50.8334 40.6667Z" fill="url(#paint0_linear_45_259)"/>
  <defs>
    <linearGradient id="paint0_linear_45_259" x1="30.5" y1="10.1667" x2="30.5" y2="50.8333" gradientUnits="userSpaceOnUse">
      <stop stop-color="#39ECF5"/>
      <stop offset="1" stop-color="#218A8F"/>
    </linearGradient>
  </defs>
</svg></div>
            <h3>Volunteer for Travel</h3>
          </div>
          <div className="feature-card">
            <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M7.29167 14.5833C7.29167 11.8207 8.38913 9.17113 10.3426 7.21763C12.2961 5.26412 14.9457 4.16666 17.7083 4.16666C20.471 4.16666 23.1205 5.26412 25.074 7.21763C27.0275 9.17113 28.125 11.8207 28.125 14.5833C28.125 17.346 27.0275 19.9955 25.074 21.949C23.1205 23.9025 20.471 25 17.7083 25C14.9457 25 12.2961 23.9025 10.3426 21.949C8.38913 19.9955 7.29167 17.346 7.29167 14.5833ZM10.4167 29.1667C7.65399 29.1667 5.00447 30.2641 3.05097 32.2176C1.09747 34.1711 0 36.8207 0 39.5833L0 43.75H35.4167V39.5833C35.4167 36.8207 34.3192 34.1711 32.3657 32.2176C30.4122 30.2641 27.7627 29.1667 25 29.1667H10.4167ZM50 43.75H39.5833V39.5833C39.5833 35.5021 37.9083 31.8125 35.2083 29.1667H39.5833C40.9513 29.1667 42.3058 29.4361 43.5696 29.9596C44.8334 30.4831 45.9818 31.2504 46.949 32.2176C47.9163 33.1849 48.6836 34.3332 49.2071 35.597C49.7306 36.8609 50 38.2154 50 39.5833V43.75ZM32.2917 25C31.0199 25.0006 29.7589 24.7683 28.5708 24.3146C30.9721 21.6427 32.2978 18.1757 32.2917 14.5833C32.2972 10.9907 30.9708 7.52359 28.5688 4.85207C29.9959 4.30707 31.5255 4.08265 33.0491 4.19473C34.5727 4.30681 36.053 4.75264 37.385 5.50062C38.7171 6.2486 39.8683 7.28043 40.7571 8.52296C41.6459 9.76549 42.2506 11.1883 42.5282 12.6906C42.8057 14.1929 42.7495 15.7378 42.3634 17.2159C41.9773 18.694 41.2708 20.0691 40.294 21.2437C39.3172 22.4183 38.094 23.3637 36.7111 24.0128C35.3281 24.662 33.8194 24.999 32.2917 25Z" fill="url(#paint0_linear_48_270)"/>
  <defs>
    <linearGradient id="paint0_linear_48_270" x1="25" y1="4.16666" x2="25" y2="43.75" gradientUnits="userSpaceOnUse">
      <stop stop-color="#39ECF5"/>
      <stop offset="1" stop-color="#218A8F"/>
    </linearGradient>
  </defs>
</svg></div>
            <h3>Membership</h3>
          </div>
        </div>

        <div className="documentation-link">
          <a href="#">Read T&C &gt;&gt;</a>
        </div>
      </main>      

      <footer className="welcome-footer">
          <p>Help those in need</p>
          <p>Find old aged people who might need your help around you</p>
          <div className="image"><img src="src\assets\map.jpg"/ ></div>
          <div className="attribution">
            <span>Powered by</span>
            <span className="google-maps">Google Maps</span>
          </div>
        </footer>
    </div>
  );
}

export default Volunte;