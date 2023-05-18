import React from "react";

const BulletContainer = (props) => {
  // const { data } = props.value;
  // console.log(data,props)
  function makeUniqueArray(arr, property) {
    return arr.filter((obj, index, self) => {
      return index === self.findIndex((t) => t[property] === obj[property]);
    });
  }

//   this.state = {
//     stringArr: []
//   };

  const textArr = (text,bluetext) => {
    // Handle click logic here
    let spiltArr = text.split(' ')
    console.log("Splited arr",spiltArr,bluetext)
    let stringArrObj = []
    
    
        spiltArr.forEach(element => {
            if(element === bluetext){
                stringArrObj.push({ text : element,isBlue: true })
            }else{
                stringArrObj.push({ text : element,isBlue: false })
            }
        });
    
   
    console.log("final string arr",stringArrObj,makeUniqueArray(stringArrObj,text))
   
    return stringArrObj
  };

  const buttonClassName = (isActive) => {
    if(isActive){
        return 'testblue';
    }
    return 'testwite'
  }
  
  return (
    <div className="bullet-wapper">
      
        {props.value.map((item) => (
          <div className="bullet-container" key={item.id}>
            <a>
              <img className="bullet-icon" src={`../img/${item.icon}`} alt="asdasd" />
            </a>
            {/* <span className="bullet-text">{textArr(item.text,item.bluetext)}</span> */}
            <p>
                {
                    textArr(item.text,item.bluetext).map((item)=> (
                        <span className={buttonClassName(item.isBlue)}> {item.text} </span>
                    ))
                }
            </p>
          </div>
        ))}
      
    </div>
  );
};

export default BulletContainer;
