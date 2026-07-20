function Typography({ text, variant }) {
  switch (variant) {
    case 'h1':
      return <h1>{text}</h1>;
    case 'h2':
      return <h2>{text}</h2>;
    case 'p':
      return <p>{text}</p>;
    default:
      return <p>{text}</p>;
  }
}

export default Typography;