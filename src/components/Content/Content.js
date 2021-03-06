import React from "react";

import "./Content.css";
import Card from "../Card/Card";

class Content extends React.Component {
  render() {
    const type = this.props.type;
    return (
      <div class="wrapperContent">
        <div class="headline" id={type}>
          <h2>{type} we recommend</h2>
        </div>
        <div class="seeAll">See All</div>
        <div class="cards">
          {this.props.data.map(element => {
            console.log(element.headline);
            return (
              <Card
                pic={element.pic}
                headline={element.headline}
                context={element.context}
                width={this.props.width}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;
