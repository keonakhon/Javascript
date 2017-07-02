class Comment {
  constructor (content, children) {
    this.content = cotent;
    this.children = children;
  }
}

const children = [
  new Comment('Sub Comment 1', []),
  new Comment('Sub Comment 2', []),
  new Comment('Sub Comment 3', [])
];

const tree = new Comment('Main Comment 1', children);
tree;
