import React from 'react';
import '../css/SkillPage.css';
import Header from './Header';

class SkillPage extends React.Component {
  constructor(){
    super();
    this.renderClicked = this.renderClicked.bind(this);
  }
  renderClicked(key){
    const skill = this.props.skills[key];
    return (
      <h3 key={key}>{skill.name}</h3>
    )
  }
  render() {
    const skillIds = Object.keys(this.props.clicked);
    return (
      <div className="skill-page">
        <Header />
        <div className="skill-page-body">
          <div>{skillIds.map(this.renderClicked)}</div>
        </div>
      </div>
    );
  };
}

export default SkillPage;
