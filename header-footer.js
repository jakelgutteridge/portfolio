// Get references to the header and footer divs
const headerDiv = document.getElementById('header');
const footerDiv = document.getElementById('footer');

const navDiv = document.getElementById('nav');

// Define the injected HTML content for header and footer
const headerHTML = `
  <header>
    <center>
    <span style="line-height: 1.2;">
      <table cellpadding="0px" cellspacing="0px" style="width: 100%; max-width: 950px;">
        <tr>
          <td>
            <!--
            <a href="/index" style="color: #FFFFFF;">
              
              <img src="/images/logo.png" height="50" style="float: left; padding: 12px 0px 12px 0px;" alt="Friends of Cedars Park">
            -->
<CENTER>
              <h1 style="color: #c9c9c9; font-size: 34px; font-family: Optima Bold; text-transform: none;">Jake Gutteridge
              <br>
              <span style="  color: rgba(255, 255, 255, 0.4); font-size: 20px; font-family: Optima; letter-spacing: 1.5px; text-transform: uppercase;">
              Aspiring Cinematographer
              </span>
              </h1>
</CENTER>
            <!--
            </a>
            -->
          </td>
          <td>
          <!--
            <div class="nav" style="float: right;">
              <div class="dropdown">
                <div class="dropbtn">
                  <img src="/images/menu.png" style="float: right;">
                </div>
                <div class="dropdown-content">
                  <a href="/index">Home</a>
                  <a href="/friends">Friends</a>
                  <a href="/photos">Photos</a>
                  <a href="/nature">Nature</a>
                  <a href="/history">History</a>
                  <a href="/calendar">Calendar</a>
                  <a href="/memorials">Memorials</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
          -->
          </td>
        </tr>
      </table>
      </span>
    </center>
  </header>
`;



const footerHTML = `
  <footer>
    <center>
      <table cellpadding="3px 0px 3px 0px" cellspacing="0px" style="width: 100%; max-width: 950px; padding-top: 10px;">
        <tr>
          <td>
          <center>
            <span style="float: right; letter-spacing: 1.5px; text-transform: uppercase;">
              <small>&copy; Jake Gutteridge 2024</small>
                <span style="font-size: 4px;">
                  <br>&nbsp;
                </span>
            </span>
          </center>
          </td>
        </tr>
      </table>
    </center>
  </footer>
`;



/* TEST - Injecting HTML for Sidenav */

const navHTML = `
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

`;

// Inject the HTML content into the header and footer divs
headerDiv.innerHTML = headerHTML;
footerDiv.innerHTML = footerHTML;
navDiv.innerHTML = navHTML;
