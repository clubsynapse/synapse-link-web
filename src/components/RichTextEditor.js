import React, { Component } from "react";
import ReactQuill from "react-quill";

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ]
  };

  handleChange = (content, delta, source, editor) => {
    console.log(content);
    this.setState({ text: content });
  };
  render() {
    return (
      <ReactQuill
        modules={this.modules}
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
  }
}
