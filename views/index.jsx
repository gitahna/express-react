var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

// Contrived example to show how one might use Flow type annotations
function countTo(n) {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(i + 2);
  }
  return a.join(', ');
}

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
        <p>
          I can count 1:
          {countTo(10)}
        </p>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
