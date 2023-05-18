import React from "react";

class Subcription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {
        id: 0,
        icon: "",
        text: "",
        total: 0,
        monthly: 0,
        offerstatus: "",
      },
      allTotal: 0,
      orgPrice: 18500,
      discountPrice: 18401,
    };
  }

  handleOptionChange = (obj) => {
    this.setState({
      selectedOption: obj,
    });

    console.log("Case", obj);
    this.calculatePrice(obj);
    // console.log("ON selecr",this.state.selectedOption)
  };

  calculatePrice = (obj) => {
    console.log("Case 2", obj);
    this.setState({
      allTotal: this.state.orgPrice - this.state.discountPrice + obj.total,
    });
    console.log("Total", this.state.allTotal);
  };

  OfferStatusClass = (obj) => {
    if(obj.offerstatus === ""){
        return "";
    }
    else if(obj.offerstatus === "Recommended"){
        return "offer-status-green"
    }
    else if(obj.offerstatus === "Offer expired"){
        return "offer-status-pink"
    }
  }

  

  render() {
    const textSubcription = [
      {
        id: 1,
        icon: "",
        text: "12 Months Subscription",
        total: 99,
        monthly: 8,
        offerstatus: "Offer expired",
      },
      {
        id: 2,
        icon: "",
        text: "12 Months Subscription  ",
        total: 179,
        monthly: 15,
        offerstatus: "Recommended",
      },
      {
        id: 3,
        icon: "",
        text: "6 Months Subscription ",
        total: 149,
        monthly: 25,
        offerstatus: "",
      },
      {
        id: 4,
        icon: "",
        text: "3 Months Subscription ",
        total: 99,
        monthly: 33,
        offerstatus: "",
      },
    ];

    return (
      <div>
        <div className="subcribe-main-container">
          <div className="columns">
            <div className="column">
              <div className="center">
                <div className="">
                  <div className="circle">1</div>
                  <div>Login</div>
                </div>
              </div>
            </div>
            <div className="column">
              <div>
                <div className="center-grid">
                  <div className="circle">2</div>
                  <div>Singn Up</div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="center">Select your subcription plan</div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="radio-container">
                {textSubcription.map((option) => (
                  <div className="subcribe-container" key={option.id} >
                    <nav
                      className="navbar"
                      role="navigation"
                      aria-label="main navigation"
                      
                    >
                      <div className="navbar-menu" >
                        <div className="navbar-start">
                          <a className="navbar-item">
                            <label className="center-imp">
                              <input
                                type="radio"
                                value={option.id}
                                disabled={option.id === 1}
                                checked={
                                  this.state.selectedOption.id === option.id
                                }
                                onChange={() => this.handleOptionChange(option)}
                                style={{ marginRight: "8px" }}
                              />
                              <span>{option.text}</span>
                            </label>
                          </a>
                            <div className={this.OfferStatusClass(option)}>{option.offerstatus}</div>
                        </div>

                        <div className="navbar-end">
                          <div className="navbar-item">
                            <div>
                              <div>Total {option.total}</div>
                              <div>{option.monthly} /mo</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                ))}
                {/* {JSON.stringify(this.state.selectedOption)}
                {this.state.allTotal} */}
                <div className="horizontal"></div>
                <div className="subscription-fee-div">
                    <p>Subcription Fee</p>
                    <p className="original-price">{"₹" + this.state.orgPrice}</p>
                </div>
                <div className="limited-offer">
                    <div className="limited-offer-div">
                    <div>Limited time offer</div>
                    <p className="original-price">{"-₹" + this.state.discountPrice}</p>
                    </div>
                    <p className="offer-validity">Offer valid till 25th March 2023</p>
                </div>
                <div className="subscription-fee-div">
                    <p>Total (Incl. of 18% GST)</p>
                    <p className="original-price">{"₹" + this.state.allTotal}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem'}}>
                <button className="cancel button is-fullwidth is-danger is-outlined">CANCEL</button>
                <button className="proceed-to-pay button is-fullwidth is-success">PROCEED TO PAY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subcription;
