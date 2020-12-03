import React, { Component } from "react";
import Modal from "./Modal";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      show: false,
    };
  }

  validationForm = () => {
    let returnData = {
      error: false,
      msg: "",
    };
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: "Không đúng định dạng email",
      };
    }
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: "Mật khẩu phải lớn hơn 8 ký tự",
      };
    }
    return returnData;
  };

  changeInputValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const validation = this.validationForm();
    if (validation.error) {
      alert(validation.msg);
    } else {
      alert("Gửi thành công");
    }
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="container" style={{ paddingTop: "5%" }}>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="text">Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={this.changeInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              onChange={this.changeInputValue}
            />
          </div>
          <button
            onClick={this.showModal}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h1>Đăng ký</h1>
            <input
              type="text"
              placeholder="Họ"
              onChange={this.changeInputValue}
            ></input>
            <input
              type="text"
              placeholder="Tên"
              onChange={this.changeInputValue}
            ></input>
            <br />
            <label>Ngày sinh</label>
            <form>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
              </select>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
              </select>
              <br />
              <div>
                <label>Giới tính</label>
                <br />
                <label>Nam</label>
                <input type="checkbox"></input>
                <label>Nữ</label>
                <input type="checkbox"></input>
                <p>
                  <button
                    class="btn btn-light"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Tùy chỉnh
                  </button>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Chọn đại từ danh xưng
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Tôi
                      </a>
                      <a class="dropdown-item" href="#">
                        Anh ấy
                      </a>
                      <a class="dropdown-item" href="#">
                        Cô ấy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Modal>
          <button
            type="button"
            onClick={this.showModal}
            class="btn btn-success btn-block mt-5"
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
