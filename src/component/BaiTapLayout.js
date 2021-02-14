import React, { Component } from "react";
import GlassesInfo from "./GlassesInfo";
export default class BaiTapLayout extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    imgSrc: `./glassesImage/v1.png`,
    glassesDetail: [],
  };
  // Render ảnh kính ra màn hình
  renderGlassesImage = () => {
    return (this.state.contentGlasses = this.arrProduct.map(
      (glasses, index) => {
        return (
          <div key={index} className="col-2 my-4">
            <button
              onClick={() => this.changeGlass(glasses)}
              style={{ background: "none", outline: "none" }}
            >
              <img
                style={{ cursor: "pointer" }}
                width="100"
                height="50"
                src={glasses.url}
              />
            </button>
          </div>
        );
      }
    ));
  };
  // Đổi hình ảnh kính và info khi click
  changeGlass = (gl) => {
    // Tìm Kính tương ứng
    let newGlasses = this.arrProduct.find((item) => item.id === gl.id);
    console.log(newGlasses);
    if (newGlasses) {
      // set lại đường dẫn ảnh và thông tin kính mới
      this.setState({
        imgSrc: newGlasses.url,
        glassesDetail: gl,
      });
    }
  };
  // ********
  // Có cách nào dùng props mà render được cả hình ảnh kính ban đầu mà k dùng tới state k ??
  // *********
  //Props
  renderGlassesInfo = () => {
    const result = this.arrProduct.map((gl, index) => {
      return (
        <div key={index} className="col-4">
          <GlassesInfo glasses={gl} />
        </div>
      );
    });
    return result;
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("./glassesImage/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 800,
        }}
      >
        <h2
          className="text-white py-2 display-5"
          style={{ backgroundColor: "black", opacity: 0.5 }}
        >
          Try Glassese Online
        </h2>
        <div className="container">
          <div className="row mt-5">
            <div
              className="col-6 p-0 m-auto"
              style={{
                backgroundImage: `url("./glassesImage/model.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 400,
                width: "35%",
              }}
            >
              <div>
                {/* render info here  */}
                {/* <GlassesInfo glasses={this.arrProduct[0]}  /> gọi như này thì nó chỉ ra được 1  */}
                {/* {this.renderGlassesInfo()} gọi như này thì nó render đè ra hết 9 cái  */}
              </div>
            </div>
            <div
              className="col-6 m-auto"
              style={{
                backgroundImage: `url("./glassesImage/model.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 400,
                width: "35%",
              }}
            ></div>
          </div>
          <div className="row bg-white mt-3 ">{this.renderGlassesImage()}</div>
        </div>
      </div>
    );
  }
}
