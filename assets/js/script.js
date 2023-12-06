'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


$(document).ready(function(){
    //Show login form
  var loginpopup = `<div class="login-popup"></div>`
  var frm = `
      <div class="frm">
          <h2>You're almost there</h2>
          <p id='frm-sub-title'>For new customer please click "Register"</p>
          <div class="btnClose">
              <i class="fas fa-times"></i>
          </div>
          <div class="log-re">
              <ul>
                  <li>
                      <a href="#">Login</a>
                  </li>
                  <li>
                      <a href="#">Register</a>
                  </li>
              </ul>
          </div><br/>
          <div class="frm-login">
              <label for="">* Telephone</label>
              <input type="text" placeholder="Enter telephone number" name="txt-telephone" id="txt-telephone" class="frm-control">
              <span class="inc-tele">Incorrect telephone number!!!</span>
              <span class="inv-tele">Please enter telephone number</span>
              <label for="">* Password</label>
              <input type="password" placeholder="Enter password" name="txt-password" id="txt-password" class="frm-control">
              <span class="inc-pass">Incorrect password!!!</span>
              <span class="inv-pass">Please enter password</span>
              <ul>
                  <li>
                      <a href="#">Forgot password?</a>
                  </li>
              </ul>
              <div class="btnLogin">
                  Login
              </div>
          </div>
          <div class="frm-forgot-pass">
              <ul>
                  <li>
                      <a href="#">Forgot password</a>
                  </li>
              </ul><br/>
              <label for="">* Telephone</label>
              <input type="text" placeholder="Enter telephone number" name="txt-telephone" id="txt-telephone" class="frm-control">
              <span>Please enter telephone</span>
              <div class="submit">
                  Submit
              </div>
              <div class="bottom-bar">
                  Alreay has account?
                  <ul>
                      <li>
                          <a href="#">Login</a>
                      </li>
                      <li>
                          <a href"#">|</a>
                      </li>
                      <li>
                          <a href="#">Register</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="frm-register">
              <label for="">* Fullname</label>
              <input type="text" placeholder="Enter full name" name="txt-name" id="txt-name" class="frm-control">
              <span id="name">Please enter your name</span>
              <label for="">* Telephone</label>
              <input type="text" placeholder="Enter telephone number" name="txt-telephone" id="txt-telephone" class="frm-control">
              <span id="telephone">Please enter telephone number</span>
              <label for="">* Create your own password</label>
              <input type="password" placeholder="Create your own password" name="txt-password" id="txt-password" class="frm-control">
              <span id="password">Please enter password</span>
              <div class="btnRegister">
                  Register
              </div>
          </div>
      </div>
  `
  $('body').on('click', ".btn-register, #booking, #booking-body", function(){
      $('body').append(loginpopup)
      $('body').find('.login-popup').append(frm)
      $('body').find('.frm .frm-register').hide()
      $('body').find('.frm .frm-forgot-pass').hide()
      $('body').find('.log-re li:eq(0) a').css({"border-bottom":"2px solid #333"})
      $('body').find('.frm-login .inc-tele').hide()
      $('body').find('.frm-login .inc-pass').hide()
      $('body').find('.frm-login .inv-tele').hide()
      $('body').find('.frm-login .inv-pass').hide()
  })
  //Change betwenn login and register
  $('body').on('click', '.frm .log-re ul li:eq(0)', function(){
      $('body').find('.frm .frm-register').hide()
      $('body').find('.frm .frm-forgot-pass').hide()
      $('body').find('.frm .frm-login').show()
      $('body').find('.log-re li:eq(1) a').css({"border-bottom":"none"})
      $('body').find('.log-re li:eq(0) a').css({"border-bottom":"2px solid #333"})
  })
  $('body').on('click', '.frm .log-re ul li:eq(1)', function(){
      $('body').find('.frm-register #name').hide()
      $('body').find('.frm-register #telephone').hide()
      $('body').find('.frm-register #password').hide()
      $('body').find('.frm .frm-login').hide()
      $('body').find('.frm .frm-forgot-pass').hide()
      $('body').find('.frm .frm-register').show()
      $('body').find('.log-re li:eq(0) a').css({"border-bottom":"none"})
      $('body').find('.log-re li:eq(1) a').css({"border-bottom":"2px solid #333"})
  })
  $('body').on('click', '.frm .frm-login ul li:eq(0)', function(){
      $('body').find('.frm .frm-login').hide()
      $('body').find('.frm .log-re').hide()
      $('body').find('.frm p').css({"display":"none"})
      $('body').find('.frm .frm-forgot-pass').show()
      $('body').find('.frm .frm-register').hide()
  })
  $('body').on('click', '.frm-forgot-pass .bottom-bar ul li:eq(0)', function(){
      $('body').find('.frm .log-re ul li:eq(0)').click()
      $('body').find('.frm .log-re').show()
      $('body').find('.frm p').css({"display":"block"})
  })
  $('body').on('click', '.frm-forgot-pass .bottom-bar ul li:eq(2)', function(){
      $('body').find('.frm .log-re ul li:eq(1)').click()
      $('body').find('.frm .log-re').show()
      $('body').find('.frm p').css({"display":"block"})
  })
  $('body').on('click', '.frm-forgot-pass .submit', function(){
      var sp = $('body').find('.frm-forgot-pass span')
      var telephone = $('body').find('.frm-forgot-pass #txt-telephone')
      if(telephone.val() == ""){
          sp.css({"display":"block"})
          telephone.focus()
      }else{
          $('body').find('.login-popup').remove()
      }
  })
  //Close form
  $('body').on('click', '.frm .btnClose', function(){
      $('body').find('.login-popup').remove()
  })
  //Login info
  $('body').on('click', '.login-popup .btnLogin', function(){
      var telephone = $('body').find('.frm-login #txt-telephone')
      var password = $('body').find('.frm-login #txt-password')
      var tele = "016 559 498"
      var pass = "09012003"
      var inc_pass = $('body').find('.frm-login .inc-pass')
      var inc_tele = $('body').find('.frm-login .inc-tele')
      var inv_pass = $('body').find('.frm-login .inv-pass')
      var inv_tele = $('body').find('.frm-login .inv-tele')
      if(telephone.val() == ""){
          inc_tele.hide()
          inv_tele.show()
          telephone.focus()
          if(password.val() == ""){
              inv_pass.show()
          }else{
              inv_pass.hide()
          }
      }
      else{
          inv_tele.hide()
          if(password.val() == ""){
              inc_pass.hide()
              inv_pass.show()
              password.focus()
          }else{
              inv_pass.hide()
          }
      }
      if(telephone.val() != "" && password.val() != ""){ 
          if(telephone.val() == tele) inc_tele.hide()
          else   inc_tele.show()
          if(password.val() == pass)  inc_pass.hide()
              else    inc_pass.show()
          if(telephone.val() == tele && password.val() == pass)   $('body').find('.login-popup').remove()
      }
  })
  //Register block
  $('body').on('click', '.frm .frm-register .btnRegister', function(){
      var name = $('body').find('.frm-register #txt-name')
      var te_ph = $('body').find('.frm-register #txt-telephone')
      var pa_wo = $('body').find('.frm-register #txt-password')
      var n = $('body').find('.frm-register #name')
      var t = $('body').find('.frm-register #telephone')
      var p = $('body').find('.frm-register #password')
      if(name.val() == ""){
          n.show()
          n.focus()
      }else   n.hide()
      if(te_ph.val() == ""){
          t.show()
          t.focus()
      }else   t.hide()
      if(pa_wo.val() == ""){
          p.show()
          p.focus()
      }else   p.hide()
      if(name.val() != "" && te_ph.val() != 0 && pa_wo.val() != 0)
          $('body').find('.login-popup').remove()
  })

    //end of login and register form

    //Chat-Box 

    //chat box
    var chat_box = `
    <div class="chat-box">
        <div class="chat-header">
            <div class="aeon-logo">
                <img src="./assets/images/icon/favicon.svg" alt="">
            </div>
            <div class="right-menu">
                <ul>
                    <li>
                        <i class="fa-solid fa-ellipsis"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-minus"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="des-box">
            <h1>Chat with Romdoul Tour</h1><br>
            <p>Hi! How can I help you?</p>
        </div>
        <div class="start-chat-box">
            <h1>Start Chat</h1>
        </div>
        <div class="footer">
            <img src="./assets/images/chat-black-icon.png" alt="">
            Powered by Messanger
        </div>
    </div>
    `
    $('body').append(chat_box)
    $('body').find('.chat-box').hide()
    var b = true
    var boo = true
    $('.chat-icon').click(function(){
        if(b == true){
            $('body').find('.chat-login').hide()
            $('body').find('.chat-box').show({directoin: "left"}, 10000)
            boo = false
            $('.chat-header .right-menu ul li:eq(0)').click()
            b = false
        }else{
            $('body').find('.chat-box').hide({directoin: "right"}, 10000)
            b = true
        }
    })
    //close chat box
    $('.chat-header .right-menu ul li:eq(1)').click(function(){
        $('body').find('.chat-box').hide({directoin: "right"}, 10000)
        b = true
    })
    //chat login
    var chat_login = `
        <div class="chat-login">
            <div class="fb-login">
                <div class="header">
                    <h1>Log in</h1>
                    <div class="switch">
                        <img src="./assets/images/my_fb_pf.jpg" alt="">
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                <div class="continue-as">
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <h2>Continue as Chev</h2>
                </div>
                <div class="continue-guest">
                    <h2>Continue as guest</h2>
                </div>
                <div class="footer">
                    <p>By continuing as a guest, you agree to Meta's <span>Terms,</span><br>
                    <span>Privacy Policy</span> and <span>Cookies Policy</span>.</p>
                </div>
            </div>
        </div>
    `
    $('body').find('.chat-box').append(chat_login)
    $('.chat-box').find('.chat-login').hide()
    $('.start-chat-box').click(function(){
        $('.chat-box').find('.chat-login').show()
        $('.chat-box').find('.chat-login .fb-login').slideDown()
    })
    $('body').on('click', '.chat-login', function(){
        $('.chat-box').find('.chat-login .fb-login').slideUp()
        $('.chat-box').find('.chat-login').hide()
    })
    //li ti 1
    var tool = `<div class="tooltiptext"></div>`
    var sub = `<div class="sub">
        <ul>
                <li>
                    Visit Facebook Page
                </li>
                <li>
                    Add Messenger to your website
                </li>
            </ul>
        </div>
    `
    $('.chat-header .right-menu ul li:eq(0)').click(function(){
        if(boo == true){
            $('body').find('.chat-header .right-menu').append(tool)
            $('body').find('.chat-box').append(sub)
            boo = false
        }else{
            $('body').find('.chat-header .right-menu .tooltiptext').remove()
            $('body').find('.chat-box .sub').remove()
            boo = true
        }
    })
})


// Function to toggle between background images
const heroElement = document.getElementById('heroElement');
function showBackgroundImage(imageNumber) {
    // Remove all existing background classes
    heroElement.classList.remove('background1', 'background2', 'background3', 'background4', 'background5');
  
    // Add the class for the desired image
    if (imageNumber === 1) {
      heroElement.classList.add('background1');
    } else if (imageNumber === 2) {
      heroElement.classList.add('background2');
    } else if (imageNumber === 3) {
      heroElement.classList.add('background3');
    }else if(imageNumber === 4){
      heroElement.classList.add('background4');
    }else if(imageNumber === 5){
      heroElement.classList.add('background5');
    }
}

// To show the second background image (for example)
let imageIndex = 2;
heroElement.classList.add('background1');
setInterval(function(){
    showBackgroundImage(imageIndex);
    imageIndex++;
if(imageIndex >= 6) imageIndex = 1;
}, 8000);
  




