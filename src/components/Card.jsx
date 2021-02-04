import React from "react";

function Card(props) {
  <div className="card">
    <div className="top">
      <h2 className="name">{pros.name}</h2>
      <img className="circle-img"
        src={pros.img}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p className="info">{pros.tel}</p>
      <p className="info">{pros.email}</p>
    </div>
  </div>
}

ReactDOM.render (
  <Card
    name="Violet Evergarden"
    img="https://i.pinimg.com/originals/23/05/5a/23055aecf5abdc1fc686b62c3087243a.jpg"
    tel="+123 456 789"
    email="VioletEvergarden@letters.com"
  />

  <Card
    name="Hinata Shoyo"
    img="https://i.pinimg.com/originals/39/8f/7a/398f7a78603616ff2e6f320e39505531.png"
    tel="+987 654 321"
    email="hinataShoyo@volleyball.com"
  />

  <Card
    name="Mitsuba Sousuke"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUFVPiI2oWuyOnyCtYkL-y75zUsiD7CGcTg&usqp=CAU"
    tel="+918 372 574"
    email="Mitsuba@camera.com"
  />
)
