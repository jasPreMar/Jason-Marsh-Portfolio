import React from 'react';
import '../css/SkillPage.css';
import Header from './Header';

class SkillPage extends React.Component {
  render() {
    const skillIds = Object.keys(this.props.clicked);
    return (
      <div className="skill-page">
        <Header />
        <div className="skill-page-body">
          <h3>{skillIds}</h3>
        </div>
      </div>
    );
  };
}

export default SkillPage;
