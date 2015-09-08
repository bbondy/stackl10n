var React = require('react');
import User from './user.js';

var Answer = React.createClass({
  render: function() {
    return <div>
      <hr/>
      <div>Accepted: {this.props.isAccepted.toString()}</div>
      <div>Score: {this.props.answer.score.toString()}</div>
      <User id={this.props.answer.ownerUserId}
        displayName={this.props.answer.ownerDisplayName}/>
      <div dangerouslySetInnerHTML={{ __html: this.props.answer.body}}/>
    </div>;
  }
});

export default Answer;