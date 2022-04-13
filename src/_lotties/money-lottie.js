import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/lottie-files/money-saving.json";

class LottieControl extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            isStopped: false,
            isPaused: false
        };
    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

          return <div>
            <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}/>
    </div>
    }
}

export default LottieControl;