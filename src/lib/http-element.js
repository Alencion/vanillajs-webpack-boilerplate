class HttpElement {
  render() {
    throw new Error("not implement render()");
  }

  toString() {
    return this.render();
  }
}

export default HttpElement;
