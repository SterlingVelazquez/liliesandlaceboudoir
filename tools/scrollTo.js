export function scrollToDiv(div) {
    var width = window.innerWidth;
    if (width > 2040) {
      if (div === "gallery") {
        window.scrollTo({
          top:960,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:3125,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:6510,
          behavior:"smooth"
        })
      } 
    } else if (width > 1680) {
      if (div === "gallery") {
        window.scrollTo({
          top:960,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2900,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:6075,
          behavior:"smooth"
        })
      }
    } else if (width > 1390) {
      if (div === "gallery") {
        window.scrollTo({
          top:960,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2900,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5975,
          behavior:"smooth"
        })
      } 
    } else if (width > 1112) {
      if (div === "gallery") {
        window.scrollTo({
          top:960,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2760,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5600,
          behavior:"smooth"
        })
      } 
    } else if (width > 868) {
      if (div === "gallery") {
        window.scrollTo({
          top:950,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2600,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5950,
          behavior:"smooth"
        })
      } 
    } else if (width > 690) {
      if (div === "gallery") {
        window.scrollTo({
          top:940,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2200,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5250,
          behavior:"smooth"
        })
      }
    } else if (width > 455) {
      if (div === "gallery") {
        window.scrollTo({
          top:740,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2480,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5440,
          behavior:"smooth"
        })
      }
    } else if (width > 360) {
      if (div === "gallery") {
        window.scrollTo({
          top:740,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2480,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5560,
          behavior:"smooth"
        })
      }
    } else if (width > 314) {
      if (div === "gallery") {
        window.scrollTo({
          top:740,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2480,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5510,
          behavior:"smooth"
        })
      }
    } else {
      if (div === "gallery") {
        window.scrollTo({
          top:740,
          behavior:"smooth"
        })
      } else if (div === "about") {
        window.scrollTo({
          top:2445,
          behavior:"smooth"
        })
      } else {
        window.scrollTo({
          top:5600,
          behavior:"smooth"
        })
      }
    }
}