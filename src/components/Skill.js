import React from 'react';
import '../css/Skill.css'

class Skill extends React.Component {
  render() {
    // shorten props using es6 destructuring
    const { details, index } = this.props;

    return(
        <h3 onClick={(index) => this.props.changeSkill(index)}>{details.name}</h3>
    )
  }
}

export default Skill;
