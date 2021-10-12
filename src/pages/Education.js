import React,{useState} from "react";
import eduApi from "../API/educationApi";

const Education = () => {
  const [eduData, setEduData] = useState(eduApi);
  return (
    <>
      <div class="text-center">
        <img
          src="./images/educationImg.svg"
          class="img-fluid rounded mx-auto d-flex"
          alt="eduImg"
        />
      </div>
      <div className="container my-5">
        {eduData.map((eduEle) => {
          const{name, course, duration} = eduEle;
          return (
            <>
              <div class="card text-center my-4">
                <h4 class="card-header">{name}</h4>
                <div class="card-body">
                  <h5 class="card-title">{course} &emsp;|&emsp; {duration}</h5>
                  {/* <p class="card-text">
                    {info}
                  </p> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
