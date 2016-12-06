import React from 'react';
import '../css/AddSkillForm.css';

class AddSkillForm extends React.Component {
  createSkill(event) {
  event.preventDefault();
  const skill = {
    name: this.name.value,
  }
  this.props.addSkill(skill);
  this.skillForm.reset();
}

  render() {
    return (
      <form
        ref={(input) => this.skillForm = input}
        className="skill-edit"
        onSubmit={(e) => this.createSkill(e)}
      >
        <input
          ref={(input) => this.name = input}
          type="text"
          placeholder="name"
        />
        <button type="submit">Add Skill</button>
      </form>
    )
  }
}

export default AddSkillForm;
