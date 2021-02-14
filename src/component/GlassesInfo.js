import React, { Component } from "react";

export default class GlassesInfo extends Component {
  render() {
    let { glasses } = this.props;
    return (
      <div className="card" >
        <img 
          alt="abc"
          style={{
            position: "absolute",
            left: 90,
            top: 90,
            opacity: 0.7,
          }}
          width={220}
          height={60}
          src={glasses?.url}
        />
        <div className="card-body w-100" 
        style={{
          position: "absolute",
          top: 245,
          opacity: 0.6,
          background: 'orange'
        }}>
          <h4 className="card-title">{glasses?.id}</h4>
          <p className="card-text">{glasses?.name}</p>
          <p className="card-text">{glasses?.desc}</p>
        </div>
      </div>
    );
  }
}
