import React from 'react';
import Header from './Header';
import AddSkillForm from './AddSkillForm';
import '../css/SkillManage.css';

class SkillManage extends React.Component {
  render() {
    return (
      <div className="skill-manager">
        <Header />
        <div className="skill-manager-body">
          <AddSkillForm addSkill={this.props.addSkill}/>
          <button onClick={this.props.loadSamples}>Load Skill Samples</button>
        </div>
      </div>
    )
  }
}

export default SkillManage;
