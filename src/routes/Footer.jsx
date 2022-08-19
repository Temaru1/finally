import React from "react";


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">

    <div>

    <div>
    <a className="klh" href="https://www.facebook.com"><img className="f1" src="https://cdn-icons-png.flaticon.com/512/1409/1409943.png" alt="photo" /></a>
    <a className="klh" href="https://www.instagram.com"><img className="f1" src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="photo" /></a>
    <a className="klh" href="https://www.twitter.com"><img className="f1" src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536424.png?token=exp=1660829611~hmac=1334f3e8025424325f2df0c34a350b6f" alt="photo" /></a>
    <a href="tel:+2347069629550"><img className="klo" src="https://cdn-icons-png.flaticon.com/512/3014/3014736.png" alt="photo" /></a>
    </div>
      <img className="footerlogo" src="https://hardleygrey.com/wp-content/uploads/2022/02/Hardley-Grey_001.png" alt="photo" />
      <p>Copyright ⓒ Temaru Emeasoba {year}</p>



    </div>

    </footer>
  );
}
