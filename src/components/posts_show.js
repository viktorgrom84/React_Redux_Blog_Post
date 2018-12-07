import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';


class PostShow extends Component {
  componentDidMount() {
    
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    console.log("test", this.props);
    return (
      <div>
        {this.props.post? this.props.post.title : 'Post Loading...'}
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}



export default connect(mapStateToProps, { fetchPost })(PostShow);