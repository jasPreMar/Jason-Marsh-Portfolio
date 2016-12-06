import React from 'react';
import SkillPage from './SkillPage';
import SkillManage from './SkillManage';
import Skill from './Skill';
import Header from './Header';
import sampleSkills from '../sampleSkills';
import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // bind methods to this
    this.changeSkill = this.changeSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    // getIntitialState
    this.state = {
      skills: {},
      clicked: {}
    };
  }

  changeSkill(key) {
    // take a copy of state
    const clicked = {...this.state.clicked};
    // update and add number of new skills
    clicked[key] = clicked[key] + 1 - 1;
    // update state
    this.setState({ clicked });
  }

  addSkill(skill) {
    // take a copy of state
    const skills = {...this.state.skills};
    // add in new skill
    const timestamp = Date.now();
    skills[`skill-${timestamp}`] = skill;
    // update state
    this.setState({ skills });
  }

  loadSamples() {
    // set state
    this.setState({
      skills: sampleSkills
    });
  }

  render() {
    return (
      <div className="jason-site">
        <div className="skill-picker-page">
          <Header />
          <div className="skill-picker-body">
            <div className="skill-button">
              <div>
                {
                  Object
                  .keys(this.state.skills)
                  .map(key =>
                    <Skill
                      key={key}
                      index={key}
                      details={this.state.skills[key]} changeSkill={this.changeSkill}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <SkillPage
          details={
            Object
            .keys(this.state.skills)
            .map(key => {this.state.skills[key]})
          }
        />
        {/* {Object.keys(this.state.skills).map(key =>
          <SkillPage
          key={key} index={key} details={this.state.skills[key]} skills={this.state.skills}
          />
        )} */}
        <SkillManage addSkill={this.addSkill} loadSamples={this.loadSamples} />
      </div>
    );
  };
}

export default App;
