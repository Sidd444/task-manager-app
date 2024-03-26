import React from "react";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"5%",paddingRight:"5%"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://th.bing.com/th/id/R.647b95b5079635b8aef3ab750766fb1f?rik=eiec%2fig86gu4lw&riu=http%3a%2f%2fwww.cliparts101.com%2ffiles%2f810%2f773ADB752ED702866BAEF7938EF0D76D%2ftask.png&ehk=aM%2b29YlCzZi7BBYjeXawRAEHexDeIby%2f9%2fL9kck8e5s%3d&risl=&pid=ImgRaw&r=0"
            style={{ height: "8vh", width: "4vw" }}
          />
        </a>
        <div>
          <button className="bg-dark-subtle"
            style={{
              border: "none",
              width: "17vw",
              height: "7vh",
              fontWeight: "bold",
              borderRadius: 6,
            }}
          >
            Siddharth
          </button>
        </div>
      </div>
      </nav>
  );
}
