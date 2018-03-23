import React, { Component } from "react";
import { Card, Icon, Image, Grid, Embed } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Post extends Component {
  renderContentByType() {
    if (this.props.type === "image") {
      return <Image src="http://placehold.it/300x300" />;
    } else if (this.props.type === "video") {
      return (
        <Embed
          id="O6Xo21L0ybE"
          placeholder="http://placehold.it/300x300"
          source="youtube"
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Image
              style={styles.profilePic}
              circular
              size="mini"
              src="http://placehold.it/50x50"
            />
            <span>Matthew</span>
          </Card.Header>
          <Card.Meta>
            <span className="date">30 minutes ago</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        {this.renderContentByType()}
        <Card.Content extra>
          <Grid>
            <Grid.Column width={8}>
              <a>
                <Icon name="thumbs up" />
                22 Likes
              </a>
            </Grid.Column>
            <Grid.Column width={8}>
              <a>
                <Icon name="comment" />
                3 Comments
              </a>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

const styles = {
  profilePic: {
    marginRight: 5
  }
};

Post.propTypes = {
  type: PropTypes.string.isRequired
};
