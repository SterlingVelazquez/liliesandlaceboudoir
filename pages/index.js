import Head from 'next/head'
import Email from '../public/smtp.js'

var pos = { left: 0, x: 0, initialX: 0 },
    pressed = false,
    images = ["/gallery/lal1.jpeg", "/gallery/lal2.jpeg", "/gallery/lal4.jpeg", "/gallery/lal3.jpeg", "/gallery/lal5.jpeg", 
    "/gallery/lal6.jpeg", "/gallery/lal7.jpeg", "/gallery/lal8.jpeg", "/gallery/lal9.jpeg", "/gallery/lal10.jpeg"],
    imageIndex = 0;

class Home extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      name : '',
      email: '',
      message: '',
    }
  }

  async componentDidMount() {
    document.getElementById("wrapper").scrollTo({
      top:10000,
    })
    /*document.getElementById("wrapper").scrollTo({
      top:0,
      behavior:"smooth"
    })*/
  }

  mouseDownHandler(e) {
    var ele = document.getElementById("gallerycontainer");
    pressed = true;
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
    pos = {
        initialX: ele.scrollLeft,
        left: ele.scrollLeft,
        x: e.clientX,
    };

    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseup', this.mouseUpHandler);
  };

  mouseMoveHandler(e) { 
    if (pressed) {
      var ele = document.getElementById("gallerycontainer");
      const dx = e.clientX - pos.x;
      ele.scrollLeft = pos.left - dx;
    }
  };

  mouseUpHandler() {
    var ele = document.getElementById("gallerycontainer");
    pressed = false;
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
  };

  openImage(num) {
    if (pos.initialX === document.getElementById("gallerycontainer").scrollLeft) {
      imageIndex = num;
      document.getElementById("fullscreenimage").src = images[num];
      document.getElementById("fullscreen").classList.toggle("active");
      document.getElementById("fullscreenshadow").classList.toggle("active");
    }
  }

  async changeImage(e, num) {
    e.stopPropagation();
    imageIndex += num;
    if (imageIndex < 0)
      imageIndex = images.length - 1;
    else if (imageIndex > images.length - 1)
      imageIndex = 0;
    document.getElementById("fullscreenimage").src = images[imageIndex];
  }

  closeImage() { 
    document.getElementById("fullscreen").classList.toggle("active");
    document.getElementById("fullscreenshadow").classList.toggle("active");
  }

  scrollToDiv(div) {
    if (div === "gallery") {
      document.getElementById("wrapper").scrollTo({
        top:960,
        behavior:"smooth"
      })
    } else if (div === "about") {
      document.getElementById("wrapper").scrollTo({
        top:2325,
        behavior:"smooth"
      })
    } else {
      document.getElementById("wrapper").scrollTo({
        top:5800,
        behavior:"smooth"
      })
    }
  }

  setName(e) {
    var name = e.target.value;
    this.setState({name: name});
  }
  setEmail(e) {
    var email = e.target.value;
    this.setState({email: email});
  }
  setMessage(e) {
    var message = e.target.value;
    this.setState({message: message});
  }
  submitForm(e) {
    e.preventDefault();
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "sterlin.velazquez37@gmail.com",
      Password : "F858F773A3DC6E81629BC9DA194AB27B3802",
      To : 'sterlin.velazquez37@gmail.com',
      From : this.state.email,
      Subject : "Request from " + this.state.name,
      Body : this.state.message,
    }).then(
      message => alert(message)
    );
  }

  render () {
    return (
      <container id="container">
        <Head>
          <title>Lilies and Lace Boudoir</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>

        <main className="wrapper" id="wrapper">

          <section className="titleSection">
            <div className="extendTitleImage"></div>
            <img className="titleImage" src="/gallery/laltitle.jpeg"></img>
            <section className="titleForeground">
              <img className="titleLogo" src="logo.png"></img>
              <div className="navBar">
                <button className="navBtn" onClick={e => this.scrollToDiv("gallery")}>Gallery</button>
                <div className="navBtnBar"></div>
                <button className="navBtn" onClick={e => this.scrollToDiv("about")}>About</button>
                <div className="navBtnBar" ></div>
                <button className="navBtn" onClick={e => this.scrollToDiv("contact")}>Contact</button>
              </div>
            </section>
          </section>

          <div className="divSplit"></div>

          <section className="gallerySection">
            <img className="galleryBackground" src="/gallery/lalgallery.jpeg"></img>
            <div className="galleryHeaderContainer">
              <div className="galleryHeaderSide"></div>
              <p className="galleryHeader">Gallery</p>
              <div className="galleryHeaderSide"></div>
            </div>
            <div className="galleryBackdrop"></div>
            <div className="galleryContainer" id="gallerycontainer" onMouseDown={e => this.mouseDownHandler(e)}>
              <img className="galleryImage" src="/gallery/lal1.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(0)}></img>
              <img className="galleryImage" src="/gallery/lal2.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(1)}></img>
              <img className="galleryImage" src="/gallery/lal4.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(2)}></img>
              <img className="galleryImage" src="/gallery/lal3.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(3)}></img>
              <img className="galleryImage" src="/gallery/lal5.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(4)}></img>
              <img className="galleryImage" src="/gallery/lal6.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(5)}></img>
              <img className="galleryImage" src="/gallery/lal7.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(6)}></img>
              <img className="galleryImage" src="/gallery/lal8.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(7)}></img>
              <img className="galleryImage" src="/gallery/lal9.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(8)}></img>
              <img className="galleryImage" src="/gallery/lal10.jpeg" onMouseDown={e => e.preventDefault()} onClick={e => this.openImage(9)}></img>
            </div>
          </section>

          <div className="divSplit"></div>

          <section className="aboutSection">
            <img className="aboutBackground" src="/gallery/lal6.jpeg"></img>
            <div className="aboutHeaderContainer">
            <div className="aboutHeaderSide"></div>
              <p className="aboutHeader">About</p>
              <div className="aboutHeaderSide"></div>
            </div>
            <div className="aboutContainer">
              <div className="sideAbout">
                <p className="aboutSideTextCopy">Hello,<br/>I'm Lily.</p>
                <p className="aboutSideText">Hello,<br/>I'm Lily.</p>
              </div>
              <img className="aboutImage" src="/gallery/about.jpeg"></img>
              <div className="aboutTextbox">
                <p className="aboutText">I fell in love with photography about 10 years ago and recently decided to specialize in just boudoir.  
                  I found my calling and my <span className="emphasisText">passion</span> within the realm of photography.<br/><br/>
                  I have struggled with body image my whole life and I know very 
                  well what it's like to feel “less than”. It took me a very long time to appreciate and <span className="emphasisText">love</span> myself and my body.<br/><br/>
                  Now I want every woman to feel as <span className="emphasisText">confident</span> as I am and the best way I can do that is with my camera. 
                  Letting them see for themselves how truly <span className="emphasisText">beautiful</span> and <span className="emphasisText">amazing</span> we 
                  all are.<br/><br/>
                  Together we will focus on your beauty and I will 
                  show you that all those things you call flaws are just essential pieces of that <span className="emphasisText">gorgeous</span> puzzle that 
                  makes up <span className="emphasisTextFinal">you</span>.<br/><br/>
                  I can’t wait to meet you and have the opportunity to create a life changing experience, to be remembered forever.
                </p>
              </div>
            </div>
            <div className="quoteContainer">
              <img className="quoteImage" src="lens.png"></img>
              <p className="quote">"Every woman is beautiful,</p>
              <p className="quote">just look through the lens"</p>
              <p className="quoteAuthor">- Lily Rodriguez</p>
            </div>
          </section>

          <div className="divSplit"></div>

          <section className="serviceSection">
            <div className="serviceHeaderContainer">
              <div className="serviceHeaderSide"></div>
              <p className="serviceHeader">The Lilies and Lace Experience</p>
              <div className="serviceHeaderSide"></div>
            </div>
            <img className="serviceImage" src="/gallery/lalservices.jpeg"></img>
            <div className="serviceContainer">
              <p className="serviceText">
                I will always go above and beyond to make everyone feel more than comfortable, at ease, beautiful and yes, sexy.<br/><br/>
                Every session will be customized and tailored to each client. This means that your feelings, fears, worries, likes, dislikes, wishes, 
                expectations and fantasies will all be taken into consideration at the time of the shoot and how I will proceed.<br/><br/>
                Rest assured that your privacy, security and integrity will always be protected.<br/><br/>
                Still on the border about boudoir? Please feel free to contact me through phone or email. I will walk you through a typical boudoir shoot 
                day as well as answer any questions and concerns that you might have. I’m super accessible and will always get back to every client.<br/><br/>
                Hope to hear from you soon!
              </p>
            </div>
            <div className="reviewCards">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </section>

          <div className="divSplit"></div>

          <section className="contactSection">
            <div className="contactHeaderContainer">
              <div className="contactHeaderSide"></div>
              <p className="contactHeader">Contact</p>
              <div className="contactHeaderSide"></div>
            </div>
            <div className="contactContainer">
              <form className="contactForm" onSubmit={e => this.submitForm(e)}>
                <p className="contactFormHeader">Want to submit a request or ask a question? Just fill out this form!</p>
                <div className="inputBox">
                  <p className="inputText">Name</p>
                  <input className="contactInput" onChange={e => this.setName(e)}></input>
                </div>
                <div className="inputBox">
                  <p className="inputText">Email</p>
                  <input className="contactInput" onChange={e => this.setEmail(e)}></input>
                </div>
                <div className="inputBox">
                  <p className="inputText">Message</p>
                  <input className="contactInput" onChange={e => this.setMessage(e)}></input>
                </div>
                <button type="submit" className="submitButton">Submit</button>
              </form>
              <div className="contactDivider"></div>
              <div className="contactInfo">
                <a className="link" href="https://www.facebook.com/liliesandlaceboudoir"  
                  target="_blank" rel="noopener noreferrer">
                  <img className="linkLogo" src="facebook.png"></img>
                  <p className="linkText">@liliesandlaceboudoir</p>
                </a>
                <a className="link" href="https://www.instagram.com/liliesandlaceboudoir/"  
                  target="_blank" rel="noopener noreferrer">
                  <img className="linkLogo" src="instagram.png" style={{width:"80px", left:"-15px"}}></img>
                  <p className="linkText">@liliesandlaceboudoir</p>
                </a>
                <a className="link" href="tel:+17863558243">
                  <img className="linkLogo" src="phone.png"></img>
                  <p className="linkText">(786) 355-8243</p>
                </a>
                <a className="link" href="mailto:liliesandlaceboudoir@gmail.com">
                  <img className="linkLogo" src="email.png"></img>
                  <p className="linkText">liliesandlaceboudoir@gmail.com</p>
                </a>
              </div>
            </div>
          </section>

          <div className="divSplit"></div>

        </main>

        <div className="fullScreen" id="fullscreen" onClick={e => this.closeImage()}>
          <div className="arrowBox" id="arrowboxleft" onClick={e => this.changeImage(e, -1)}>
            <div className="arrow"></div>
          </div>
          <img className="fullScreenImage" id="fullscreenimage" src="/gallery/lal1.jpeg"></img>
          <div className="arrowBox" id="arrowboxright" onClick={e => this.changeImage(e, 1)}>
            <div className="arrow"></div>
          </div>
        </div>
        <div className="fullScreenShadow" id="fullscreenshadow"></div>

      </container>
    )
  }
}

export default Home;
